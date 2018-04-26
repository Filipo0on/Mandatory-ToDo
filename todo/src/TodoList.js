import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor (props) {
        super(props);

        this.state = {

          items: []

        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                checked: false

            };
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
        e.preventDefault();
    }

    deleteItem(key) {

        let filteredItems = this.state.items.filter(function (item){
            return (item.key !== key)
        });

        this.setState({
           items: filteredItems
        });
    }

    clearall() {


        let filteredItems = this.state.items.filter(function (item){
            return (item.checked === false)
        });

        this.setState({
            items: filteredItems
        });


    }



    checkstatus(index) {

        console.log(index);
        const changestate = this.state.items.map((item, i) =>  index === i ? {...item, checked: !item.checked } : item);
        this.setState({items: changestate})

    }

    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="Enter task">
                        </input>
                        <button type="submit"> Add</button>
                    </form>
                    <button onClick={() => this.clearall()}>Remove All</button>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem}
                            toggle={(index) => this.checkstatus(index)}
                />
            </div>
        );
    }
}

export default TodoList;