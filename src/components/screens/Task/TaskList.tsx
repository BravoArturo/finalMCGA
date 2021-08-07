import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";
import { useHistory } from 'react-router-dom';
import * as TaskService from './TaskService'
import TaskItem from './TaskItem'

const TaskList = () => {
    const history = useHistory();
    const [tasks, settasks] = useState<Task[]>([]);

    const loadTask = async () => {
        const res = await TaskService.getTasks();

        const formatedDate = res.data.map(task => {
            return {
                ...task,
                createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
                updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
            }
        })
        settasks(formatedDate);
        console.log(res.data);
    }
    useEffect(() => {
        loadTask()
    }, [])
    return (
        <div>
            <div className="header">
                <div>
                    <h1 className="tittleMyTasks">My Tasks</h1>
                </div>
                <div>
                    <a className="icon" href="/home" onClick={() => history.push({
                    pathname: '/home'
                    ,
                    state: { statusLogin: true }
                })}>Home</a>
                    <a className="icon" href="/newTask"onClick={() => history.push({
                    pathname: '/newTask'})}>Create Task</a>
                </div>
            </div>
            <div className="loadTask">{
                tasks.map((task) => {
                    return <TaskItem task={task} key={task._id} loadTask={loadTask}></TaskItem>
                })
            }</div>
        </div>
    );
} 
export default TaskList;