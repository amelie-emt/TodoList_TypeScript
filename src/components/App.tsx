import React, {ChangeEvent, Component, FormEvent} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {addToList, getLast} from "../communication/ListFunctions";

interface AppProps {
}

interface AppStates {
    todoList : string[],
    todoValue: string
}

export class App extends Component<AppProps,AppStates> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            todoList : [""],
            todoValue : ""
        }
    }

    componentDidMount() {
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    }


     handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addToList(this.state.todoValue).then(r => console.log(r));
        getLast().then(data => {this.setState({todoList: this.state.todoList.concat(data)})});
    };

    handleChange =(event: ChangeEvent<HTMLInputElement>) => {
        this.setState({todoValue: event.currentTarget.value});
    };

    render(){
    return (
        <div>
            <h1>Welcome to my to-do app.</h1>
            <TodoList todoList={this.state.todoList}/>
            <TodoInput onSubmit={this.handleSubmit.bind(this)}  onInputChange={this.handleChange.bind(this)} inputValue={this.state.todoValue}/>
        </div>
    );
}
};

