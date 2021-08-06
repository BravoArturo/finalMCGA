import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Navbar from './components/screens/Navbar/Navbar'
import Login from './components/screens/Login/Loginform';
import Navbar from './components/screens/Navbar/Navbar';
import TaskForm from './components/screens/Task/TaskForm';
import TaskList from './components/screens/Task/TaskList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar></Navbar> */}
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Navbar} />
          <Route path="/newTask" component={TaskForm} />
          <Route path="/myTask" component={TaskList} />
          <Route path="/updated/:id" component={TaskForm}/>
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
