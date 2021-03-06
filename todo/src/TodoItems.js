import React, { Component } from "react";


class TodoItems extends Component {
    constructor(props) {
        super(props);





        this.createTasks = this.createTasks.bind(this);
    }





    createTasks(item, index) {

        return <li key={item.key}>
            <input type="checkbox" checked={item.checked} onClick={()=> this.props.toggle(index)}/>
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