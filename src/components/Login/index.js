import React, { Component } from 'react';
import { Drawer, Form, Icon, Button,Checkbox, Input, Select } from 'antd';
import 'antd/dist/antd.css';
import Datastore from 'nedb';

const dbStock = new Datastore({ filename: 'src/data/datasource.json', autoload: true });
const { Option } = Select;
const FormItem = Form.Item;
//const db = require('./services/serve.js');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
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
    var doc = { hello: 'world'
    , n: 5
    , today: new Date()
    , nedbIsAwesome: true
    , notthere: null
    , notToBeSaved: undefined  // Will not be saved
    , fruits: [ 'apple', 'orange', 'pear' ]
    , infos: { name: 'nedb' }
    };

    dbStock.insert(doc, function (err, newDoc) {   // Callback is optional
// newDoc is the newly inserted document, including its _id
// newDoc has no key called notToBeSaved since its value was undefined
});
    this.props.history.push("/")

  }
  handleClick = () => {

    // create a protocol object
    var protocol = {
      "title": this.firstname
    }


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
      <Form className="login-form" style={{ width: '300px' }}>
            <FormItem>

              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} id="first" placeholder="Username" />

            </FormItem>
            <FormItem>

              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} id="Second" type="password" placeholder="Password" />

            </FormItem>
            <FormItem>

              <Checkbox>Remember me</Checkbox>

              <Button type="primary " onClick={this.hide} htmlType="submit" className="login-form-button">
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
                rules: [{ required: true, message: 'please enter First Name' }],
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter First Name" />)}
            </Form.Item>

            <Form.Item label="Second Name">
              {getFieldDecorator('Second Name', {
                rules: [{ required: true, message: 'please enter Second Name' }],
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter Second Name" />)}
            </Form.Item>

            <Form.Item label="Email">
              {getFieldDecorator('Email', {
                rules: [{ required: true, message: 'Please enter an Email' }],
              })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter Email" />)}
            </Form.Item>

            <Form.Item label="Password">
              {getFieldDecorator('Password', {
                rules: [{ required: true, message: 'Please choose the Password' }],
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter Password" />)}
            </Form.Item>

            <Form.Item label="Confim Password">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: 'Please Confim Password' }],
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter to Confim Password" />)}
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

export default Form.create()(Login);
