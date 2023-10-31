import React from "react";
import style from './button.module.scss';

class Button extends React.Component<React.PropsWithChildren<{}>> {
    render(){
        return (
        <button className={style.button}>
            {this.props.children}
        </button>
        );
    }
}

export default Button;