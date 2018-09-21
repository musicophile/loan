import React, {Component} from 'react';
import { Drawer, Form, Icon, Button, Cascader, Popconfirm, Modal, Table, Col, Row, Tabs, Checkbox, Input, Timeline,
  Select, DatePicker, List, Avatar, Divider,} from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const db = require("../services/serve.js");
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

class Feedback extends Component {
  constructor(props) {
super(props);
this.state = {

}
  }
  onSecond = () => {
  db.addProtocol()

  };
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
</div>
    )
  }
};
export default Feedback;
