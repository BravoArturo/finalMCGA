import axios from 'axios';
import Login from './Login';

 export const getUsers = async () => {
    return await axios.get<Login[]>(`http://localhost:3000/Users`);
}

export const createUser = async (user: Login) => {
    return await axios.post(`http://localhost:3000/Users`, user);
}

export const getUser = async (id: string) => {
    return await axios.get<Login>(`http://localhost:3000/Users/${id}`);
}

export const updatedUser = async (id: string, user: Login) => {
    return await axios.put<Login>(`http://localhost:3000/Users/${id}`, user);
}

export const deleteUser = async (id: string) => {
    return await axios.delete<Login>(`http://localhost:3000/Users/${id}`);
}