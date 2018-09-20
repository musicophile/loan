import React, {Component} from 'react';
import { Drawer, Form, Icon, Button, Cascader, Popconfirm, Modal, Table, Col, Row, Tabs, Checkbox, Input, Timeline,
  Select, DatePicker, List, Avatar, Divider,} from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const db = require("../services/serve.js");
const FormItem = Form.Item;
class Loanform extends Component {
  constructor(props) {
super(props);
this.state = {

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
  onSecond = () => {
  db.addProtocol()

  };

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
            <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item label="First Name">
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: 'please enter first name' }],
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="please enter first name" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item label="Second Name">
            {getFieldDecorator('secondname', {
              rules: [{ required: true, message: 'please enter second name' }],
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="please enter second name" />)}
          </Form.Item>
        </Col>

        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Interest Rate">
              {getFieldDecorator('ow', {
                rules: [{ required: true, message: "please enter Interest Rate" }],
              })(
                <Input
                onChange={this.handleChang}
                 value={this.state.interest}
                  style={{ width: '100%' }}
                  addonAfter="%"
                  placeholder="please enter Interest Rate"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Time Unit">
              {getFieldDecorator('typ', {
                rules: [{ required: true, message: 'Please choose the Time Unit' }],
              })(
                <Input
                onChange={this.handleChan}
                 value={this.state.time}
                  style={{ width: '100%' }}
                  addonAfter="Month"
                  placeholder="please enter Time Unit"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
          <Row gutter={16}>

            <Col span={12}>
              <Form.Item label="Start-End Date">
                {getFieldDecorator('dateTime', {
                  rules: [{ required: true, message: 'Please choose the dateTime' }],
                })(
                                        <DatePicker style={{ width: '100%' }} />
                )}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Principal">
                {getFieldDecorator('l', {
                  rules: [{ required: true, message: 'please enter Principal' }],
                })(
                  <Input

                 onChange={this.handleChange}
                  value={this.state.principal}
                                       style={{ width: '100%' }}
                    addonAfter="Tsh."
                   placeholder="please enter Principal"
                  />
                )}
              </Form.Item>
            </Col>

          </Row>

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
          <Button onClick={this.onSecond} type="primary">Nt</Button>
        </div>
        </div>

    )
  }
};
export default Form.create()(Loanform);
