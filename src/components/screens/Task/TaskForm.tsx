import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Task from './Task';
import * as TaskService from './TaskService'
import { useParams } from 'react-router';

const TaskForm = () => {

    interface Params {
        id: string;
    }
    const params = useParams<Params>();
    console.log(params);
    const initalState = {title: '', description: '', deadline: ''};
    const [task, settask] = useState<Task>(initalState);

    const hadleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        settask({...task, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //we cancelled the default behavior
        const res = await TaskService.createTask(task);
        toast.success('New Task added');
        console.log(res.data);
        settask(initalState);
    };

    const getTask = async (id: string) => {
        const res = await TaskService.getTask(id);
        console.log(res);
    }
    useEffect(()=> {
        if (params.id) getTask(params.id);
    }, [])
    return (
        <div>
            New Task
            <form onSubmit={handleSubmit}>
                <div>
                <input type="text" name="title" placeholder="Write a title for this task" autoFocus onChange={hadleInputChange} value={task.title}></input>
                <textarea name="description" placeholder="Please enter a description" onChange={hadleInputChange} value={task.description}></textarea>
                <input type="date" name="deadline" placeholder="Please enter a deadline" onChange={hadleInputChange} value={task.deadline}></input>
                </div>
                {
                    params.id?
                    <button>Updated task</button>
                    :
                    <button>Create task</button>
                }
            </form>
        </div>
    )
}

export default TaskForm;
