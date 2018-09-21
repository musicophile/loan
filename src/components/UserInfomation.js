import React, {Component} from 'react';
import { Drawer, Form, Icon, Button, Cascader, Popconfirm, Modal, Table, Col, Row, Tabs, Checkbox, Input, Timeline,
  Select, DatePicker, List, Avatar, Divider,} from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
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

class UserInfomation extends Component {
  constructor(props) {
super(props);
this.state = {

}
  }
  handleCli = () => {

     this.props.history.push("/Content")
  }
  render(){
    return(
      <div>
    <br/>
         This is the principal Principal<br/>
         This is the interest Interest<br/>
         This is the time  Time<br/>
         This is the installment  mm<br/>
         <Row>
    <Col span={24}>
     <DescriptionItem
       title="Message"
       content="Make things as simple as possible but no simpler."
     />
    </Col>
    </Row>
    <Button onClick={this.handleCli} type="primary">Next</Button>
</div>
    )
  }
};
export default UserInfomation;
