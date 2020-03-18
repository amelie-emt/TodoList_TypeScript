import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
    return (
        <ul className="list-group">
            <TodoListItem
                todo={{
                    task: "Finish writing this blogpost",
                    finished: false
                }}
            />
        </ul>
    );
};
export default TodoList;