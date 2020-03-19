import React, { HTMLProps, ChangeEvent } from "react";
import Button from "./button";
import {addToList} from "../communication/ListFunctions";

interface Props extends HTMLProps<HTMLFormElement> {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
}

const TodoInput = ({ onInputChange, inputValue, ...props }: Props) => {



    return (
        <form {...props}>
            <input
                className="form-control"
                placeholder="What would you like to get done?"
                onChange={onInputChange}
                value={inputValue}
            />
            <Button name="create"/>

        </form>
    );
};
export default TodoInput;