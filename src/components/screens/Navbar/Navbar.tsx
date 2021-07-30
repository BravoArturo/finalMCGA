import react from 'react'
import {BrowserRouter, Link, Router} from 'react-router-dom';

const Navbar = () => {
    return <div>
        <div>
        FINAL MCGA BRAVO, GARELLO, MONEGHESSI
        </div>
        <nav>
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