import React, { Component } from 'react';
import {
  Drawer, Form, Icon, Button, Cascader, Popconfirm, Modal, Table, Col, Row, Tabs, Checkbox, Input, Timeline,
  Select, DatePicker, List, Avatar, Divider,
} from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Loanform from './Loanform';
import Feedback from './Feedback';



class Loanfeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibl: true,
      loginscreen: [],
      isLogin: true,

    }
  }
  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(<Loanform parentContext={this} appContext={this.props.parentContext} />);
    this.setState({
      loginscreen: loginscreen,

    })

  }
  pushform() {
    var loginscreen = [];
    loginscreen.push(<Feedback parentContext={this} />);
    this.setState({
      loginscreen: loginscreen,
    })
  }

  handleClick(event) {
    // console.log("event",event);
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(<Feedback parentContext={this} />);
      this.setState({
        loginscreen: loginscreen,
        isLogin: false
      })
    }
    else {
      var loginscreen = [];
      loginscreen.push(<Loanform parentContext={this} />);
      this.setState({
        loginscreen: loginscreen,
        isLogin: true
      })
    }
  }
  onClose = () => {
    this.setState({
      visible: false,
      sevisible: false,
      visibl: false,
      visibleee: false,
    });
  };
  render() {

    //    var Principal =  this.state.principal;
    //    var Interest =  this.state.interest/100;
    //      var Time =  this.state.time;
    //      var me = Principal + Interest;
    //    var denominator = 1 + Interest;
    //    var fulldenominator =  Math.pow(denominator, Time) - 1;
    //    var val = 1/fulldenominator;
    //    var m = val +1;
    //      var mm = m * Principal * Interest;
    return (
      <Drawer

        width={500}
        placement="right"
        onClose={this.onClose}
        maskClosable={false}
        style={{
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: 53,
        }}
        title="Verify Your Installment"
        visible={this.state.visibl}
        onOk={this.handleClick}
        onCancel={() => this.setModal2Visible(false)}
      >
        <div>
          {this.state.loginscreen}

        </div>


        <div>
          <Button type="primary" onClick={(event) => this.handleClick(event)}>Nex</Button>
        </div>
      </Drawer>
    )
  }
};
export default Form.create()(Loanfeedback);
