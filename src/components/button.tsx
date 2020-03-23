import React, {Component} from "react";

type ButtonProps = {
    name: string
}

class Button extends Component<ButtonProps,{}> {
    render() {
        return (
            <button className="btn btn-primary">{this.props.name}</button>
        );
    };
}

export default Button;
