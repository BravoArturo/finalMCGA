import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Navbar from './components/screens/Navbar/Navbar'
import Login from './components/screens/Login/Loginform';
ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar></Navbar> */}
    <BrowserRouter>
    <div>
    <Switch>
        <Route exact path="/Login" component={Login}/>
      </Switch>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
