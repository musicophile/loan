import React, { Component } from 'react';

import './App.css';
import main from "./main";
import textbox from "./textbox";


import { Route, BrowserRouter , Link, Redirect } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
           <div>

               <Route exact  path={"/"} component={textbox}/>
                
                <Route path={"/main"} component={main}/>
                <Route path={"/textbox"} component={textbox}/>



                          </div>
                </BrowserRouter>
    );
  }
}

export default App;
