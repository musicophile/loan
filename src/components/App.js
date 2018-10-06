import React, { Component } from 'react';

import './App.css';
import Content from "./Home";
<<<<<<< HEAD
<<<<<<< HEAD
import Login from './Login';
import UserInfomation from "./UserInfomation";
=======
import UserInfomation from "./UserInfomation";
import Login from "./Login";
>>>>>>> ceb335741443767de08c95cd74d05ddcf59fb0de
import Home from './Home';


import { Route, BrowserRouter, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const { app } = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/Content"} component={Content} />
          <Route path={"/Login"} component={Login} />
          <Route path={"/UserInfomation"} component={UserInfomation} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
