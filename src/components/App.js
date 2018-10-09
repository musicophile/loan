import React, { Component } from 'react';

import './App.css';
import Content from "./Home";
import Login from './Login';
//import UserInfomation from "./UserInfomation";
import Home from './Home';
import Testing from './Testing';
import Datastore from 'nedb';


import { Route, BrowserRouter, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const { app } = window.require('electron').remote;
const dbStock = new Datastore({ filename: '/data/datasource.json', autoload: true });
const dbBilling = new Datastore({ filename: '/data/datasource-billing.json', autoload: true });
class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/Content"} component={Content} />
          <Route path={"/Login"} component={Login} />
          <Route path='/Testing' render={()=><Testing {...this.props} dbBilling={dbBilling} dbStock= {dbStock} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
