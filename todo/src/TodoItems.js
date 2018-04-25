import React, { Component } from "react";


class TodoItems extends Component {
    constructor(props) {
        super(props);



        this.state = {
            checkboxState: true
        }

        this.createTasks = this.createTasks.bind(this);
    }


    toggle(event) {
        this.setState({
            checkboxState: !this.state.checkboxState
        });
    }



    createTasks(item) {
        const checkedOrNot = [];
        checkedOrNot.push(<p>{this.state.checkboxState ? 'Not done' : 'Done'}</p>);
        const checkbox = (<span><input type="checkbox" onClick=
            {this.toggle.bind(this)} />{checkedOrNot}</span>);  

        return <li>
            <p> {checkbox}</p>
            <p>{item.text}</p>
            <button onClick={() => this.delete(item.key)} key={item.key}>Remove</button>
            </li>
    }


    delete(key) {
        this.props.delete(key);
    }

    render () {

    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (

        <ul className="theList">
            {listItems}



        </ul>
        )
    }
}

export default TodoItems;