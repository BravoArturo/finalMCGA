import {RequestHandler} from 'express';

export const getTasks : RequestHandler = (req, res) => {
    res.json('getting tasks');
};
