import axios from 'axios';

 export const getTasks = async () => {
    return await axios.get('http://localhost:3000/Tasks');
}
