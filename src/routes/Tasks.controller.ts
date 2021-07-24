import {RequestHandler} from 'express';
import Task from './Task'
export const getTasks : RequestHandler = (req, res) => {

    res.json('getting tasks');
};
export const getTask : RequestHandler = (req, res) => {
    res.json('getting a task');
};
export const createTask : RequestHandler = (req, res) => {
    const task = new Task(req.body);
    console.log(task);    
    res.json('getting tasks');
};
export const deleteTasks : RequestHandler = (req, res) => {
    res.json('getting tasks');
};
export const updateTasks : RequestHandler = (req, res) => {
    res.json('getting tasks');
};