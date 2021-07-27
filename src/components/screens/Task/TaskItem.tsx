import react from 'react';
import Task from './Task';

interface Props {
    task: Task
}
const TaskItem = ({task}: Props) => {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.deadline}</p>
        </div>
    )
}
export default TaskItem
