import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Login from './Login';

const Loginform = () => {

    const initalStateLogin = {userName: '', password: ''};
    const [login, setlogin] = useState<Login>(initalStateLogin);

    const hadleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setlogin({...login, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //we cancelled the default behavior

        console.log('hola')

    };

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <div>
                <input type="text" name="userName" placeholder="Please write your user name" autoFocus onChange={hadleInputChange} value={login.userName}></input>
                <input type="text" name="password" placeholder="Please write your password" autoFocus onChange={hadleInputChange} value={login.password}></input>
                <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Loginform;