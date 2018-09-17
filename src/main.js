import React, { Component } from 'react';
import { Drawer, Form, Icon, Button, Modal, Table, Col, Row, Tabs, Checkbox, Input, Timeline,
  Select, DatePicker, List, Avatar, Divider,} from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';


const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Cheque No.',
  dataIndex: 'age',
  width: 150,
},
{
  title: 'Amount',
  dataIndex: 'age',
  width: 150,
},{
  title: 'Date Created',
  dataIndex: 'address',
}];
const colum = [{
  title: 'Name',
  dataIndex: 'name',

}, {
  title: 'Cheque No.',
  dataIndex: 'age',

},
{
  title: 'Principal',
  dataIndex: 'principal',

},{
  title: 'Date Created',
  dataIndex: 'address',
}];
const column = [{
  title: 'Name',
  dataIndex: 'name',

}, {
  title: 'Cheque No.',
  dataIndex: 'age',

},
{
  title: 'Date Created',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    principal: 250000 + i ,
    address: `London, Park Lane no. ${i}`,
  });
}

class main extends Component {
  constructor(props){
    super(props);
  this.state = {
 tabPosition: 'left',
 visible: false,
 visibl: false,
 sevisible: false,
 principal:'0',
 interest: '0',
 time :'0',
 visiblee: false,
     visibleee: false,
  modal2Visible: false,
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleChang = this.handleChang.bind(this);
  this.handleChan = this.handleChan.bind(this);
}

setModal2Visible(visibl) {
   this.setState({ visibl });
 }

  showDrawere = () => {
    this.setState({
      visiblee: true,
    });
  };

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

  // Retrieve the input fields

this.props.history.push("/textbox")
  }

  handleChange(event) {
  this.setState({principal: event.target.value});
}
handleChang(event) {
this.setState({interest: event.target.value});
}
handleChan(event) {
this.setState({time: event.target.value});
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

  onSecond = () => {
    this.setState({
visibl: true,
visible: false,
//  principal: this.state.principal + 1,
    });

  };

  render() {
    const { getFieldDecorator } = this.props.form;
      var n =  this.state.principal;
        var nn =  this.state.interest/100;
        var nnn =  this.state.time;
        var me = n + nn;
        var denominator = 1 + nn;
        var fulldenominator =  Math.pow(denominator, nnn) - 1;
        var val = 1/fulldenominator;
        var m = val +1;
      var mm = m * n * nn;
    return (
       <div className="card-container" style={{ marginTop: 16 }}>
 <Tabs tabPosition={this.state.tabPosition}  type="card" >
         <TabPane tab={<span><Icon type="bank" />Loan</span>} key="1">
         <Button type="primary" onClick={this.showDrawer}>
           Create Loan
         </Button>
         <div  >

     <Table columns={column} dataSource={data} />
     </div>
         <Drawer
           title="Create Loan"
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
             <Row gutter={16}>
               <Col span={12}>
               <Form.Item label="First Name">
                 {getFieldDecorator('firstname', {
                   rules: [{ required: true, message: 'please enter first name' }],
                 })(<Input  placeholder="please enter first name" />)}
               </Form.Item>
             </Col>
             <Col span={12}>
             <Form.Item label="Second Name">
               {getFieldDecorator('secondname', {
                 rules: [{ required: true, message: 'please enter second name' }],
               })(<Input  placeholder="please enter second name" />)}
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
             <Button onClick={this.onSecond} type="primary">Next</Button>
           </div>
         </Drawer>
         <Modal
          title="Verify Your Installment"
          centered
                maskClosable={false}
           width={800}
           visible={this.state.visibl}
           onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}

                      okText="Create Loan"
                                cancelText=" Cancel"
         >
<br/>
        This is the principal { n}<br/>
        This is the interest { nn}<br/>
        This is the time { nnn}<br/>
        This is the installment  {mm}<br/>
        <Row>
  <Col span={24}>
    <DescriptionItem
      title="Message"
      content="Make things as simple as possible but no simpler."
    />
  </Col>
</Row>

           </Modal>
         </TabPane>
         <TabPane tab={<span><Icon type="team" />Customer</span>} key="2"> <Button type="primary" onClick={this.showSecondDrawer}>
            Create Customer
          </Button>
      <div  >

  <Table columns={colum} dataSource={data} />
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
                    })(<Input placeholder="please enter First name" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Second namel">
                  {getFieldDecorator('secondname', {
                    rules: [{ required: true, message: 'please enter second name' }],
                  })(<Input  placeholder="please enter second name" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Last name">
                  {getFieldDecorator('Lastname', {
                    rules: [{ required: true, message: 'please enter Last name' }],
                  })(<Input  placeholder="please enter Last name" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Cheque Number">
                  {getFieldDecorator('chequenumber', {
                    rules: [{ required: true, message: 'please enterCheque Number' }],
                  })(<Input  placeholder="please enter Cheque Number" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Country">
                  {getFieldDecorator('secondname', {
                    rules: [{ required: true, message: 'please enter second name' }],
                  })(<Input  placeholder="please enter second name" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Region">
                  {getFieldDecorator('Region', {
                    rules: [{ required: true, message: 'please enter Region' }],
                  })(<Input  placeholder="please enter Region" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="District">
                  {getFieldDecorator('District', {
                    rules: [{ required: true, message: 'please enter District name' }],
                  })(<Input  placeholder="please enter District name" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="area">
                  {getFieldDecorator('area', {
                    rules: [{ required: true, message: 'please enter area name' }],
                  })(<Input  placeholder="please enter area name" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Phone Number">
                  {getFieldDecorator('Phone Number', {
                    rules: [{ required: true, message: 'please enter Phone Number' }],
                  })(<Input  placeholder="please enter Phone Number" />)}
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
<br/> <div>
        <List
          dataSource={[
            {
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<a onClick={this.showDrawe}>View Profile</a>]}>
              <List.Item.Meta
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Cheque Number:1256-4581-2548"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visibleee}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Cheque Number" content="1256-4581-2548" />
            </Col>
          </Row>
          This is the principal: { n}<br/>

                  This is the installment Amount: {mm}<br/>


          <Divider />
                  <p style={pStyle}>This is the progress for your Installments</p>
          <Row>
            <Col span={20}>
              <DescriptionItem title="Green" content="These are the installments that you have made" />
            </Col>
            </Row>
            <Row>
            <Col span={20}>
              <DescriptionItem title="Red" content="This is your next coming installmegnt" />
            </Col>
                      </Row>
                      <Row>
                      <Col span={20}>
                        <DescriptionItem title="Blue" content="This is your next installmegnts too" />
                      </Col>
                                </Row>
                  <Timeline>
   <Timeline.Item color="green">First Installment: {mm * 1} :2015-09-01 </Timeline.Item>
   <Timeline.Item color="green">Second Installment: {mm * 2} :2015-10-01</Timeline.Item>
   <Timeline.Item color="red">
  Third Installment: {mm * 3}: 2015-11-01
   </Timeline.Item>
   <Timeline.Item>
  Fourth Installment: {mm * 4}: 2015-12-01
   </Timeline.Item>
   <Timeline.Item>
  Fifth Installment: {mm * 5}: 2015-12-01
   </Timeline.Item>
 </Timeline>

        </Drawer>
      </div></TabPane>
         <TabPane tab={<span><Icon type="file" />Report</span>} key="4"><br/>No report to print out</TabPane>
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
               <Button onClick={this.handleClick} type="primary">Log Out</Button>
       </div>
          </div>

    );
  }
}

export default Form.create()(main);
