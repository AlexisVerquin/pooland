// ./assets/components/Home.js

import React, {Component} from 'react';

import { Link, NavLink } from "react-router-dom";
import Navigations from './Navigations';

class Home extends Component {

    render() {
        return (
            <Navigations />
        )
    }
}

export default Home;