import React from "react";


type ButtonProps = {
    name: string
}

const Button = ({name}:ButtonProps) => {
    return (
            <button className="btn btn-primary" >{name}</button>
    );
};
export default Button;