import express from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import taskRoutes from './routes/Task.routes';

const app = express();

app.set('port', 3000);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false})); //When is sent some information by a post from a form it can understand what contains.
app.use(morgan('dev')); //this give me information about the proccess.
app.use(taskRoutes);

export default app;