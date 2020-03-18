import React, {useState} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import Button from "./button";
import {Todo} from "../interfaces/todo"

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>> ([]);
    return (
        <div>
            <h1>Welcome to my to-do app.</h1>
            <TodoList />
            <TodoInput />
            <Button name="create"/>
        </div>
    );
};
export default App;