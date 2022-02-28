// ./assets/components/Home.js

import React, {Component, useState } from 'react';
import axios from "axios";

class List extends Component {

    constructor() {
        super();
        this.state = { data: [], loading: true};
    }

    componentDidMount() {
        this.getTodo();
    }

    getTodo() {
        axios.get(`http://pooland.test/api/gotest`).then( todo => {
            this.setState({ data: todo.data, loading: false})
        })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div className="list">
                {loading ? (
                    <div className={'row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    this.state.data.map(todo =>
                        <div className="item" key={todo.key.toString()}>
                            <p> {todo.name} </p>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default List;