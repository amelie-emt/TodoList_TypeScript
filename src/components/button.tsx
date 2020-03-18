import React, { HTMLProps } from "react";
import axios from 'axios'

type ButtonProps = {
    name: string
}

const Button = ({name}:ButtonProps) => {
    return (

        <form>
            <button className="btn btn-primary">{name}</button>
        </form>
    );
};
export default Button;