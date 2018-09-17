import React, { Component } from 'react';
  import { Drawer, Form, Icon, Button, Col, Row, Checkbox, Input, Select, DatePicker } from 'antd';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

const { Option } = Select;
const FormItem = Form.Item;
const db = require('./serve.js');
class textbox extends Component {
  constructor(props){
    super(props);
    this.state={
visible: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };

    onClose = () => {
      this.setState({
        visible: false,
      });
    };

    hide = () => {

    this.props.history.push("/main")

    }
    handleClick = () => {

      // create a protocol object
                 var protocol = {
                     "title": this.firstname
                   }


   db.addProtocol()

  //alert ("Error , please check your username and password");
     }

  render() {
   const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <div

       style={{
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingLeft: 350,
          position: 'absolute',
          align: 'center'
        }} >
      Login
      <Form className="login-form"  style={{ width: '300px'}}>
        <FormItem>

            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} id="first" placeholder="Username" />

        </FormItem>
        <FormItem>

            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} id="Second" type="password" placeholder="Password" />

        </FormItem>
        <FormItem>

            <Checkbox>Remember me</Checkbox>

            <Button type="primary " onClick={this.hide}  htmlType="submit" className="login-form-button">
              Log in
            </Button>

        </FormItem>
        </Form>

        <Button type="primary" onClick={this.showDrawer}>
        Register Account
        </Button>

          </div>
        <Drawer
          title="Create New Account"
          width={500}
          placement="right"
          onClose={this.onClose}
          maskClosable={false}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <Form layout="vertical" hideRequiredMark>

                <Form.Item label="First Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'please enter user name' }],
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>

                <Form.Item label="Second Name">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'please enter url' }],
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>

                <Form.Item label="Email">
                  {getFieldDecorator('owner', {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>

                <Form.Item label="Password">
                  {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please choose the type' }],
                  })(<Input placeholder="please enter user name" />)}
                </Form.Item>

              <Form.Item label="Confim Password">
                {getFieldDecorator('type', {
                  rules: [{ required: true, message: 'Please choose the type' }],
                })(<Input placeholder="please enter user name" />)}
              </Form.Item>


          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button onClick={this.handleClick} type="primary">Submit</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(textbox);
