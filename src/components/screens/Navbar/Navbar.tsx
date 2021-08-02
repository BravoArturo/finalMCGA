import react from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return <div className="wrapper">
        <div className="tittleProject">
            FINAL MCGA BRAVO, GARELLO, MONEGHESSI
        </div>
        <nav className="navbar">
            <ul>
                <li>
                    <a href="/"> Home</a>
                    {/* This should use Link */}
                </li>
                <li>
                    <a href="/newTask">Create new Task</a>
                </li>
            </ul>
        </nav>
    </div>
}

export default Navbar;