import {RequestHandler} from 'express';
import Task from './Task'
export const getTasks : RequestHandler = (req, res) => {

    res.json('getting tasks');
};
export const getTask : RequestHandler = (req, res) => {
    res.json('getting a task');
};
export const createTask : RequestHandler = async(req, res) => {
    const task = new Task(req.body);
    const savedTask= await task.save();
    console.log(savedTask);    
    res.json('creating a new tasks');
};
export const deleteTasks : RequestHandler = (req, res) => {
    res.json('deleting an existing task');
};
export const updateTasks : RequestHandler = (req, res) => {
    res.json('updating an existing task');
};