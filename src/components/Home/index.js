import React, { Component } from 'react';
import {
  Drawer, Form, Icon, Button, Cascader, Popconfirm, Modal, Table, Col, Row, Tabs, Checkbox, Input, Timeline,
  Select, DatePicker, List, Avatar, Divider,
} from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Loanform from '../LoanForm';
// import Loanfeedback from './LoanFeedback';


const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const options = [{
  value: 'zhejiang',
  label: 'January',
}, {
  value: 'jiangksu',
  label: 'February',
}
  , {
  value: 'jianlgsu',
  label: 'March',
}
  , {
  value: 'jialngsu',
  label: 'April',
}
  , {
  value: 'jilangsu',
  label: 'May',
}
  , {
  value: 'jliangsu',
  label: 'June',
}
  , {
  value: 'j',
  label: 'July',
}
  , {
  value: 'ji',
  label: 'August',
}
  , {
  value: 'jia',
  label: 'September',
}, {
  value: 'jian',
  label: 'October',
}
  , {
  value: 'jiang',
  label: 'November',
}
  , {
  value: 'jiangs',
  label: 'December',
}
  ,];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}
const Option = Select.Option;
const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Principal',
  dataIndex: 'principal',
  width: 150,
},
{
  title: 'Amount',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Date Created',
  dataIndex: 'address',
}];
const column = [{
  title: 'Name',
  dataIndex: 'name',

}, {
  title: 'Cheque No.',
  dataIndex: 'Cheque',

},
{
  title: 'Principal',
  dataIndex: 'principal',

}, {
  title: 'Date Created',
  dataIndex: 'Datee',
}];
const colum = [{
  title: 'Name',
  dataIndex: 'name',

}, {
  title: 'Cheque No.',
  dataIndex: 'Cheque',

},
{
  title: 'Phone Number',
  dataIndex: 'Phone',

},
{
  title: 'Location',
  dataIndex: 'address',
}];
const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    Phone: '+255-768568932',
    name: `Edward King ${i}`,
    age: 32,
    principal: 250000 + i,
    Cheque: 1256 - 4581 - 2548,
    Datee: 1 - 12 - 2018,
    address: `London, Park Lane no. ${i}`,
  });
}
// const db = require("../services/serve");
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateLoan: false,
      tabPosition: 'left',
      visible: false,
      visibl: false,
      sevisible: false,
      principal: '0',
      interest: '0',
      loginscreen: [],
      time: '0',
      visiblee: false,
      visibleee: false,
      modal2Visible: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChang = this.handleChang.bind(this);
    this.handleChan = this.handleChan.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnClickCreateLoan = this.handleOnClickCreateLoan.bind(this);

  }

  setModal2Visible(visibl) {
    this.setState({ visibl });
  }

  showDrawere = () => {
    this.setState({
      visiblee: true,
    });
  };
  handleClick = () => {

    // db.addProtocol()
  }
  onClosee = () => {
    this.setState({
      visiblee: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showDrawe = () => {
    this.setState({
      visibleee: true,
    });
  };

  showSecondDrawer = () => {
    this.setState({
      sevisible: true,
    });
  };

  handleClick = () => {

    // db.addProtocol()
    this.props.history.push("/UserInfomation")
  }
  handleClic = () => {

    this.props.history.push("/Login")
  }

  handleChange(event) {
    this.setState({ principal: event.target.value });
  }
  handleChang(event) {
    this.setState({ interest: event.target.value });
  }
  handleChan(event) {
    this.setState({ time: event.target.value });
  }

  handleOnClickCreateLoan() {
    // if (true) {
    //   var loginscreen = [];
    //   loginscreen.push(<Loanfeedback parentContext={this} appContext={this.props.parentContext} />);
    //   this.setState({
    //     loginscreen: loginscreen
    //   })
    // }
    this.setState({ showCreateLoan: true });
  }

  onClose = () => {
    this.setState({
      visible: false,
      sevisible: false,
      visibl: false,
      visibleee: false,
    });
  };
  onnClose = () => {
    this.setState({
      modal2Visible: false,
    });
  };


  render() {
    const { showCreateLoan } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="card-container" style={{ marginTop: 16 }}>
        <Drawer

          width={500}
          placement="right"
          // onClose={this.onClose}
          maskClosable={false}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
          title="Create Loan"
          visible={showCreateLoan}
        // onOk={this.handleClick}
        // onCancel={() => this.setModal2Visible(false)}
        >
          {/* <div>
            {this.state.loginscreen}

          </div>


          <div>
            <Button type="primary" onClick={(event) => this.handleClick(event)}>Nex</Button>
          </div> */}
          <Loanform />
        </Drawer>
        <Tabs tabPosition={this.state.tabPosition} type="card" >
          <TabPane tab={<span><Icon type="bank" />Loan</span>} key="1">
            <Button type="primary" onClick={this.handleOnClickCreateLoan}>
              Create Loan
         </Button>
            <div>
              {this.state.loginscreen}
            </div>
            <div  >
              <Table onRow={(record) => ({
                onClick: (event) => { this.handleClick(event) },
                onDoubleClick: () => { this.showDrawe },
              })} columns={column} dataSource={data} />
            </div>
          </TabPane>
          <TabPane tab={<span><Icon type="team" />Customer</span>} key="2">
            <Button type="primary" onClick={this.showSecondDrawer}>
              Create Customer
          </Button>
            <div  >

              <Table onRow={record => ({
                onClick: () => { this.handleClick }
              })} columns={colum} dataSource={data} />
            </div>
            <Drawer
              title="Create New Customer"
              width={500}
              placement="right"
              onClose={this.onClose}
              maskClosable={false}
              visible={this.state.sevisible}
              style={{
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: 53,
              }}
            >
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
                <Button onClick={this.hide} type="primary">Submit</Button>
              </div>
            </Drawer>
          </TabPane>
          <TabPane tab={<span><Icon type="line-chart" />Installment</span>} key="3" >
            <br /> <div>
              <Button type="primary" onClick={this.showDrawe}>
                Create Loan
                </Button>
              <div  >
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />
                <Table columns={column} dataSource={data} />
              </div>
            </div></TabPane>
          <TabPane tab={<span><Icon type="file" />Report</span>} key="4"><br />No report to print out</TabPane>
        </Tabs>
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
          <Button onClick={this.handleClic} type="primary">Log Out</Button>
        </div>
      </div>

    );
  }
}

export default Form.create()(Content);
