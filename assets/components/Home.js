// ./assets/components/Home.js

import React, {Component} from 'react';

import { Link, NavLink } from "react-router-dom";
import Navigations from './Navigations';
import Todo from './toDoList/Todo';

class Home extends Component {
    render() {
        return [
            <Todo />
        ];
    }
}

export default Home;