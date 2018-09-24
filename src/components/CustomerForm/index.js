import React, { Component } from 'react';
import { Form, Icon, Col, Row, Tabs, Input, DatePicker } from 'antd';
import 'antd/dist/antd.css';



class CustomerForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="First Name">
                      {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'please enter First name' }],
                      })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter First name" />)}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Second namel">
                      {getFieldDecorator('secondname', {
                        rules: [{ required: true, message: 'please enter second name' }],
                      })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter second name" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Last name">
                      {getFieldDecorator('Lastname', {
                        rules: [{ required: true, message: 'please enter Last name' }],
                      })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter Last name" />)}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Cheque Number">
                      {getFieldDecorator('chequenumber', {
                        rules: [{ required: true, message: 'please enterCheque Number' }],
                      })(<Input placeholder="please enter Cheque Number" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Country">
                      {getFieldDecorator('secondname', {
                        rules: [{ required: true, message: 'please enter second name' }],
                      })(<Input placeholder="please enter second name" />)}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Region">
                      {getFieldDecorator('Region', {
                        rules: [{ required: true, message: 'please enter Region' }],
                      })(<Input placeholder="please enter Region" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="District">
                      {getFieldDecorator('District', {
                        rules: [{ required: true, message: 'please enter District name' }],
                      })(<Input placeholder="please enter District name" />)}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="area">
                      {getFieldDecorator('area', {
                        rules: [{ required: true, message: 'please enter area name' }],
                      })(<Input placeholder="please enter area name" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Phone Number">
                      {getFieldDecorator('Phone Number', {
                        rules: [{ required: true, message: 'please enter Phone Number' }],
                      })(<Input placeholder="please enter Phone Number" />)}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Date of Registration">
                      {getFieldDecorator('Date of Registration', {
                        rules: [{ required: true, message: 'please enter Date of Registration' }],
                      })(<DatePicker style={{ width: '100%' }} />)}
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
      </div>
    )
  }
}

export default Form.create()(CustomerForm);