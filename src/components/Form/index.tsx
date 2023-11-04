import React from "react";
import Button from "../Button";
import style from './form.module.scss';
import { ITask } from "../../types/tasks";

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        task: "",
        time: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    ...this.state,
                    isSelected: false,
                    isCompleted: false
                }
            ]
        )
        this.setState({
            task: "",
            time: "00:00"
        })
    }

    render(){
        return (
            <form className={style.new__task} onSubmit={this.addTask.bind(this)}>
                <div className={style.input__container}>
                    <label htmlFor="task">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="task" 
                    name="task" 
                    id="task"
                    value={this.state.task}
                    onChange={event => this.setState({...this.state, task: event.target.value})}
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
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})}
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
}

export default Form;