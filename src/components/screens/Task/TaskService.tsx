import axios from 'axios';
import Task from './Task';

export const getTasks = async () => {
    return await axios.get<Task[]>('https://tasksmcga.herokuapp.com/Tasks');
}

export const createTask = async (task: Task) => {
    return await axios.post('https://tasksmcga.herokuapp.com/Tasks', task);
}

export const getTask = async (id: string) => {
    return await axios.get<Task>(`https://tasksmcga.herokuapp.com/Tasks/${id}`);
}

export const updatedTask = async (id: string, task: Task) => {
    return await axios.put<Task>(`https://tasksmcga.herokuapp.com/Tasks/${id}`, task);
}

export const deleteTask = async (id: string) => {
    return await axios.delete<Task>(`https://tasksmcga.herokuapp.com/Tasks/${id}`);
}