import react from 'react';
import Task from './Task';
import { useHistory } from 'react-router-dom';
import * as TaskService from './TaskService';
import { toast } from 'react-toastify';
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
        toast.error("One item was deleted");
        loadTask();
    };
 
    const deleteTaskConfirmation = (id: string) => {
        window.confirm("Delete one task?") ?
            handleDdelete(id)
            :
            console.log("No delete");
    }

    return (
        <div>
            <div className="wrapper2">
                <div className="containerTask">
                    <form className="formTaskList">
                        <div className="date">
                            <label className="deadlineTask">{task.deadline}</label>
                            {
                                ((Date.parse(task.deadline) - Date.now()) / days) <= 5 ?
                                    <div className="colorRed">You have 5 days or less to do this task</div>
                                    :
                                    <div className="colorGreen">You have more than 5 days to do this task</div>
                            }
                        </div>
                        <div className="tittleTask">
                            <label className="taskTittle">{task.title}</label>
                        </div>
                        <div className="descriptionTask">
                            <label>{task.description}</label>
                        </div>
                        <div>
                            <button className="btnUpdateTask" onClick={() => history.push(`/updated/${task._id}`)}>Edit</button>
                            <button className="btnDeleteTask" onClick={() => task._id && deleteTaskConfirmation(task._id)}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TaskItem
