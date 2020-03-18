import React, { HTMLProps } from "react";
const TodoInput = (props: HTMLProps<HTMLFormElement>) => {
    return (
        <form {...props}>
            <input
                className="form-control"
                placeholder="What would you like to get done?"
            />
        </form>
    );
};
export default TodoInput;