import React, { Component } from 'react';

import './App.css';
import Content from "./Content";
import UserInfomation from "./UserInfomation";
import Login from "./Login";


import { Route, BrowserRouter , Link, Redirect } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
           <div>

               <Route exact  path={"/"} component={Login}/>
                <Route path={"/Content"} component={Content}/>
                <Route path={"/Login"} component={Login}/>
                <Route path={"/UserInfomation"} component={UserInfomation}/>
                          </div>
                </BrowserRouter>
    );
  }
}

export default App;
