// ./assets/components/Home.js

import React, {Component} from 'react';
import List from './List';

class Todo extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="toDoList">
                            <h1>TodoList</h1>
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Todo;