import userEvent from '@testing-library/user-event';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Login from './Login';
import * as LoginService from './loginService'
import './styles.css'


const Loginform = () => {
    const history = useHistory();

    const initalStateLogin = {userName: '', password: ''};
    const [login, setlogin] = useState<Login>(initalStateLogin);

    const hadleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setlogin({...login, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //we cancelled the default behavior
        const res = await LoginService.getUsers();
        const searchUser = res.data.filter(user => user.userName == login.userName);
        if (searchUser.length>0){
            login.password == searchUser[0].password? 
            history.push({
                pathname: '/Menu'
                 ,
                 state: {statusLogin:true}
            }) 
            :
            alert("Usuario o contraseña no coinciden");
        }else{
            alert("Usuario o contraseña no coinciden");
        }
    };

    return (   
            <div className="container">
                <header> Welcome</header>                
                <form onSubmit={handleSubmit}>
                    <div className="data">  
                        <label>Username</label> 
                        <input type="text" name="userName" placeholder="Please write your user name" autoFocus onChange={hadleInputChange} value={login.userName}/>
                    </div>
                    <div className="data pass">     
                        <label>Password</label>                   
                        <input type="text" name="password" placeholder="Please write your password" onChange={hadleInputChange} value={login.password}/>                        
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="btnConteiner">
                        <button className="btn" type="submit">log in</button>
                    </div>
                </form>
            </div>              
    )
}
export default Loginform;