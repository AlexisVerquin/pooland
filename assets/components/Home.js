// ./assets/components/Home.js
    
import React, {Component} from 'react';
import {Route, Routes,Navigate, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Languages from './Languages';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/languages"}> Languages </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                    <Route path='/users' element={<Users/>} />
                    <Route path='/posts' element={<Posts/>} />
                    <Route path='/languages' element={<Languages/>} />
               </Routes>
           </div>
        )
    }
}
    
export default Home;