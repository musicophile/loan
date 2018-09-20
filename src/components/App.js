import React, { Component } from 'react';

import './App.css';
import Content from "./Home";
import UserInfomation from "./UserInfomation";
import Login from "./Login";
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
