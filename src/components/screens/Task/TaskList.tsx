import React from "react";
import axios from "axios";
import { useEffect } from "react";

const TaskList = () => {
    
    const loadTask = async () => {
        const res = await axios.get('http://localhost:3000/Tasks');
        console.log(res);
    }
    useEffect(() => {
        loadTask()
    }, [])
    return (
        <div>Hola soy la lista</div>
    );
}
export default TaskList;