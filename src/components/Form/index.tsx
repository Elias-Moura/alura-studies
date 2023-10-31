import React from "react";
import Button from "../Button";
import './style.scss';

class Form extends React.Component {
    render(){
        return (
            <form className="new__task">
                <div className="input__container">
                    <label htmlFor="task">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="task" 
                    name="task" 
                    id="task"
                    placeholder="O que você quer estudar?"
                    required
                    />
                </div>
                <div className="input__container">
                <label htmlFor="time">
                    Tempo
                </label>
                    <input 
                    type="time" 
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required

                    />
                </div>
                <Button />
            </form>
        );
    }
}

export default Form;