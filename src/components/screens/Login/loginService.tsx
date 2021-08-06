import axios from 'axios';
import Login from './Login';

export const getUsers = async () => {
    return await axios.get<Login[]>(`https://tasksmcga.herokuapp.com/Users`);
}

export const createUser = async (user: Login) => {
    return await axios.post(`https://tasksmcga.herokuapp.com/Users`, user);
}

export const getUser = async (id: string) => {
    return await axios.get<Login>(`https://tasksmcga.herokuapp.com/Users/${id}`);
}

export const updatedUser = async (id: string, user: Login) => {
    return await axios.put<Login>(`https://tasksmcga.herokuapp.com/Users/${id}`, user);
}

export const deleteUser = async (id: string) => {
    return await axios.delete<Login>(`https://tasksmcga.herokuapp.com/Users/${id}`);
}