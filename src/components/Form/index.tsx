import React, { useState } from "react";
import Button from "../Button";
import style from './form.module.scss';
import { ITask } from "../../types/tasks";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
}



function Form({ setTasks }: Props){
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    task,
                    time,
                    isSelected: false,
                    isCompleted: false,
                    id: uuidv4()
                }
            ]
        )
        setTask("");
        setTime("00:00");
    }
    return (
        <form className={style.new__task} onSubmit={addTask}>
            <div className={style.input__container}>
                <label htmlFor="task">
                    Adicione um novo estudo
                </label>
                <input 
                type="task" 
                name="task" 
                id="task"
                value={task}
                onChange={event => setTask(event.target.value)}
                placeholder="O que você quer estudar?"
                required
                />
            </div>
            <div className={style.input__container}>
            <label htmlFor="time">
                Tempo
            </label>
                <input 
                type="time" 
                step="1"
                value={time}
                onChange={event => setTime(event.target.value)}
                name="time"
                id="time"
                min="00:00:00"
                max="01:30:00"
                required

                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    );
    
}

export default Form;