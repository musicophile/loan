import React, { Component } from 'react';

import './App.css';
import Content from "./Home";
import Login from './Login';
//import UserInfomation from "./UserInfomation";
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

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
