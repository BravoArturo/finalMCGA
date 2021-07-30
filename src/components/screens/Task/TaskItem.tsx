import react from 'react';
import Task from './Task';
import {useHistory} from 'react-router-dom';

interface Props {
    task: Task,
}
const TaskItem = ({task}: Props) => {
    const history = useHistory();
    return (
        <div>
            <div>
            <span onClick={() => history.push(`/updated/${task._id}`)}>edit</span>
            </div>
            <span onClick={() => (console.log(task))}>x</span>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            {
                Date.parse(task.deadline)<Date.now()?
                console.log("yes")
                :
                console.log("no")
            }
            <p>{task.deadline}</p>
            <div>
                rest days
            </div>
        </div>
    )
}
export default TaskItem
