import { error } from 'console';
import {RequestHandler} from 'express';
import User from './User';
export const getUsers : RequestHandler = async (req, res) => {
    try{
        const Users = await User.find();
        return res.json(Users);
    }catch(error){
        res.json(error)
    }
};
export const getUser : RequestHandler = async (req, res) => {
    try{
        const userFound = await User.findById(req.params.id);
        if (!userFound) return res.status(204).json();
        res.json(userFound);
    }catch(error){
        res.json(error)
    }
};
export const createUser : RequestHandler = async(req, res) => {
    const user = new User(req.body);
    const savedUser= await user.save();
    console.log(savedUser);    
    res.json('creating a new Users');
};
export const deleteUsers : RequestHandler = async (req, res) => {
    try{
        const userDeleted = await User.findByIdAndDelete(req.params.id);
        if (!userDeleted) return res.status(204).json();
        return res.json('One user was deleted ' + userDeleted);
    }catch(error){
        res.json(error)
    }
};
export const updateUsers : RequestHandler = async (req, res) => {
    try{
        const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!userUpdated) return res.status(204).json();
        return res.json('One user was Updated ' + userUpdated);
    }catch(error){
        res.json(error)
    }
};