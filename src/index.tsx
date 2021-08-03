import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskList from './components/screens/Task/TaskList';
import TaskForm from './components/screens/Task/TaskForm';
import Navbar from './components/screens/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskItem from './components/screens/Task/TaskItem';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Switch>

          <Route path="/home" component={Navbar} />
          <Route path="/myTask" component={TaskList} />
          <Route path="/newTask" component={TaskForm} />
          <Route path="/updated/:id" component={TaskForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
