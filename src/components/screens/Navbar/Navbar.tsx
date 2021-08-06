import react from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
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
                        <a className="menuMyTask" href="/myTask">My Task</a>
                        {/* This should use Link */}
                        <a className="menuNewTask" href="/newTask">New Task</a>
                        <a className="menuLogOut" href="/">Log Out</a>
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