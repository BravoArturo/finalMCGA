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
            <div className="header">
                <a className="icon" href="/">Home</a>
                <p>Home</p>
            </div>
            <div className="wrapper2">
                <div className="container">
                    <form className="formTaskList">
                        <div>
                            <button className="btnUpdateTask" onClick={() => history.push(`/updated/${task._id}`)}>Edit</button>
                        </div>
                        <div className="structureTask">
                            <div className="date">
                                <label className="deadlineTask">{task.deadline}</label>
                                {
                                    ((Date.parse(task.deadline) - Date.now()) / days) <= 5 ?
                                        <div className="colorRed">You have 5 days or less to do this task</div>
                                        :
                                        <div className="colorGreen">You have more than 5 days to do this task</div>
                                }
                            </div>
                            <div className="descriptionTask">
                                <label>{task.description}</label>
                            </div>
                            <div className="tittleTask">
                                <label className="taskTittle">{task.title}</label>
                            </div>
                        </div>
                        <div>
                            <button className="btnDeleteTask" onClick={() => task._id && handleDdelete(task._id)}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TaskItem
