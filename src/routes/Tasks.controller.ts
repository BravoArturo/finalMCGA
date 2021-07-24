import { error } from 'console';
import {RequestHandler} from 'express';
import Task from './Task'
export const getTasks : RequestHandler = async (req, res) => {
    try{
        const tasks = await Task.find();
        return res.json(tasks);
    }catch(error){
        res.json(error)
    }
};
export const getTask : RequestHandler = async (req, res) => {
    try{
        const taskFound = await Task.findById(req.params.id);
        if (!taskFound) return res.status(204).json();
        res.json(taskFound);
    }catch(error){
        res.json(error)
    }
};
export const createTask : RequestHandler = async(req, res) => {
    const task = new Task(req.body);
    const savedTask= await task.save();
    console.log(savedTask);    
    res.json('creating a new tasks');
};
export const deleteTasks : RequestHandler = async (req, res) => {
    try{
        const taskDeleted = await Task.findByIdAndDelete(req.params.id);
        if (!taskDeleted) return res.status(204).json();
        return res.json('One task was deleted ' + taskDeleted);
    }catch(error){
        res.json(error)
    }
};
export const updateTasks : RequestHandler = async (req, res) => {
    try{
        const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!taskUpdated) return res.status(204).json();
        return res.json('One task was Updated ' + taskUpdated);
    }catch(error){
        res.json(error)
    }
};