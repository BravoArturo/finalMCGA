import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";
import * as TaskService from './TaskService'
import TaskItem from './TaskItem'

const TaskList = () => {
    const [tasks, settasks] = useState<Task[]>([]);

    const loadTask = async () => {
        const res = await TaskService.getTasks();

        const formatedDate = res.data.map(task => {
            return {
                ...task,
                createdAt: task.createdAt? new Date(task.createdAt): new Date(),
                updatedAt: task.updatedAt? new Date(task.updatedAt): new Date(),
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
            {
                tasks.map((task) => {
                    return <TaskItem task={task} key={task._id} loadTask={loadTask}></TaskItem>
                })
            }
        </div>
    );
}
export default TaskList;