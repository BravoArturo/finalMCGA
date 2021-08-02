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
    const initalState = { title: '', description: '', deadline: '' };
    const [task, settask] = useState<Task>(initalState);

    const hadleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        settask({ ...task, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //we cancelled the default behavior

        if (!params.id) {
            const res = await TaskService.createTask(task);
            toast.success('New Task added');
            console.log(res.data);
            settask(initalState);
        } else {
            await TaskService.updatedTask(params.id, task);
            toast.success('Task updated');
        }

    };

    const getTask = async (id: string) => {
        const res = await TaskService.getTask(id);
        const { title, description, deadline } = res.data;
        settask({ title, description, deadline });
    }
    useEffect(() => {
        if (params.id) getTask(params.id);
    }, [])
    return (
        <div>
            New Task
            <div className="wrapper">
                <div className='newTask'>
                    <form onSubmit={handleSubmit}>
                        <div className="taskStructure">
                            <div className="deadline">
                                <label>Please enter a deadline</label>
                                <input type="date" name="deadline" onChange={hadleInputChange} value={task.deadline}></input>
                            </div>
                            <div className="tittle">
                                <label>Write a title for this task</label>
                                <input type="text" name="title" autoFocus onChange={hadleInputChange} value={task.title}></input>
                            </div>
                            <div className="description">
                                <label>Please enter a description</label>
                                <textarea name="description" onChange={hadleInputChange} value={task.description}></textarea>
                            </div>
                            <div className="btnTask">
                                {
                                    params.id ?
                                        <button>Updated task</button>
                                        :
                                        <button>Create task</button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <p>Home</p>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;
