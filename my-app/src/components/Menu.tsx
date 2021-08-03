import React from 'react';
import Login from './screens/Login/Login'
import { useLocation } from "react-router-dom";
import Loginform from './screens/Login/Loginform';

const Menu = () => {
    const location = useLocation()
    const stateLogin = location.state
    return (
        <div>
            {location.state?
            <div>
                Menu
            </div>
            :
            <div>
                mmmm logueate first
            </div>
        }
        </div>
    )
}

export default Menu;
