import axios from 'axios';
import Task from './Task';

 export const getTasks = async () => {
    return await axios.get<Task[]>('http://localhost:3000/Tasks');
}

export const createTask = async (task: Task) => {
    return await axios.post('http://localhost:3000/Tasks', task);
}

export const getTask = async (id: string) => {
    return await axios.get<Task>(`http://localhost:3000/Tasks/${id}`);
}

