import React, {Component} from "react";

interface Props {
    todoList: string[]
}

class TodoList extends Component<Props,{}> {
    render() {
        return (
            <ul className="list-group">
                {this.props.todoList.map(todo => (
                    <li className="list-group-item" >
                        {todo}
                    </li>
                ))}
            </ul>
        );
    }
};
export default TodoList;
