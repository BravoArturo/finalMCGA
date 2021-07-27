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
        settasks(res.data)
        console.log(res.data);
    }
    useEffect(() => {
        loadTask()
    }, [])
    return (
        <div>
            {
                tasks.map((task) => {
                    return <TaskItem task={task}></TaskItem>
                })
            }
        </div>
    );
}
export default TaskList;