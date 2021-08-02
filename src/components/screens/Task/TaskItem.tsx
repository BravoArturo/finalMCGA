import react from 'react';
import Task from './Task';
import { useHistory } from 'react-router-dom';
import * as TaskService from './TaskService';
import './StructureTask.css';

interface Props {
    task: Task,
    loadTask: () => void;
}
const TaskItem = ({ task, loadTask }: Props) => {
    const days = 24 * 60 * 60 * 1000;
    const history = useHistory();

    const handleDdelete = async (id: string) => {
        await TaskService.deleteTask(id);
        loadTask();
    }
    return (
        <div>
            <div>
                <button onClick={() => task._id && handleDdelete(task._id)}>x</button>
            </div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            {
                ((Date.parse(task.deadline) - Date.now()) / days) <= 5 ?
                    <div className="colorRed">You have 5 days or less to do this task</div>
                    :
                    <div className="colorGreen">You have more than 5 days to do this task</div>
            }
            <p>{task.deadline}</p>
            <div>
                rest days
            </div>
            <div>
                <span onClick={() => history.push(`/updated/${task._id}`)}>edit</span>
            </div>
        </div>
    )
}
export default TaskItem
