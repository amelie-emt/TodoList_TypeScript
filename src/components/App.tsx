import React, {ChangeEvent, FormEvent, useState} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

import {Todo} from "../interfaces/Todo";


const App = () => {
    const [todos, setTodos] = useState<Array<Todo>> ([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos(previousTodos => [
            ...previousTodos,
            {
                task: todoValue,
                finished: false
            }
        ]);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.currentTarget.value);
    };

    return (
        <div>
            <h1>Welcome to my to-do app.</h1>
            <TodoList todos={todos} />
            <TodoInput onSubmit={handleSubmit} onInputChange={handleChange}  inputValue={todoValue} />

        </div>
    );
};
export default App;