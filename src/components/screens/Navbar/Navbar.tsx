import react from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
    const history = useHistory();
    const location = useLocation()
    const stateLogin = location.state
    return(
    <div className="containerHome">
        {
            location.state?
            <div>
                <div className="tittleProject">
                </div>
                <div className="navMenu">
                    <nav className="navbar">
                        <a className="menuMyTask" onClick={() => history.push({
                    pathname: '/myTask'})}>My Task</a>
                        {/* This should use Link */}
                        <a className="menuNewTask" onClick={() => history.push({
                    pathname: '/newTask'})}>New Task</a>
                        <a className="menuLogOut" onClick={() => history.push({
                    pathname: '/finalMCGA'})}>Log Out</a>
                        <div className="dot"></div>
                    </nav>
                </div>
            </div>
            :
            <div>
                <div className="tittleProject">
                </div>
                <div className="navMenu">
                    <nav className="navbar">
                    You must be logged in first 
                    <div className="dot"></div>
                    </nav>
                </div>
            </div>
}
        
    </div>
    )
}

export default Navbar;