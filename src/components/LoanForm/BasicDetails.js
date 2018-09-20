
import React, { Component } from 'react';
import { Form, Icon, Col, Row, Tabs, Input, DatePicker } from 'antd';
import 'antd/dist/antd.css';



class BasicDetails extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="First Name">
                {getFieldDecorator('firstname', {
                  rules: [{ required: true, message: 'please enter first name' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter first name" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Second Name">
                {getFieldDecorator('secondname', {
                  rules: [{ required: true, message: 'please enter second name' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please enter second name" />)}
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
                    style={{ width: '100%' }}
                    addonAfter="Tsh."
                    placeholder="please enter Principal"
                  />
                )}
              </Form.Item>
            </Col>

          </Row>

        </Form>
      </div>
    )
  }
}

export default Form.create()(BasicDetails);