import react from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return <div className="wrapper">
        <div className="tittleProject">
            <h1>FINAL MCGA BRAVO, GARELLO, MONEGHESSI</h1>
        </div>
        <div className="navMenu">
            <nav className="navbar">
                <a href="/"> Home</a>
                {/* This should use Link */}
                <a href="/newTask">New Task</a>
                <div className="dot"></div>
            </nav>
        </div>
    </div>
}

export default Navbar;