import React from "react";
import style from './button.module.scss';

class Button extends React.Component<React.PropsWithChildren<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void 
}>> {
    render(){
        const { type="button", onClick } = this.props;
        return (
        <button onClick={ onClick } type={type} className={style.button}>
            {this.props.children}
        </button>
        );
    }
}

export default Button;