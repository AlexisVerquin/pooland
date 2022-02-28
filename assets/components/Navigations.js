// ./assets/components/Home.js

import React, {Component} from 'react';
import {Route, Routes, Navigate, Link, withRouter, NavLink} from 'react-router-dom';
import Users from './Users';
import Profile from './Profile';
import Languages from './Languages';

class Navigations extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/languages"}> Languages </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/user"}> Users </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/profile"}> Profile </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path='/languages' element={<Languages/>} />
                    <Route path='/user' element={<Users/>} />
                    <Route path='/profile' element={<Profile/>} />
                </Routes>
            </div>
        )
    }
}

export default Navigations;