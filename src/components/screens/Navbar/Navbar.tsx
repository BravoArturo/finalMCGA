import react from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return <div className="container">
        <div className="tittleProject">
            <h1>FINAL MCGA BRAVO, GARELLO, MONEGHESSI</h1>
        </div>
        <div className="navMenu">
            <nav className="navbar">
                <a href="/myTask">My Task</a>
                {/* This should use Link */}
                <a href="/newTask">New Task</a>
                <a href="/">Log Out</a>
                <div className="dot"></div>
            </nav>
        </div>
    </div>
}

export default Navbar;