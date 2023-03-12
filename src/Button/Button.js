import React from "react";
import './Button.css';


const Button = (props) => {
    // the leftmost column in the calculator making orange background color
    const orangeDigit = (val) => {
        if (val == "+" || val == "-" || val == "*" || val == "/") {
            return true
        }
    }

    return (
        <div className={`btn ${orangeDigit(props.children) ? "orange" : null}`} onClick={() => props.valueClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button;
