import React, { Component } from 'react';
import { Drawer, Form, Icon, Button, Cascader,Table, Col, Row, Tabs,Input,
    Select, DatePicker,
  } from 'antd';

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
class CustomerList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    handleClick = () => {
    
        this.props.onPathState();
         }
    render(){
        return(
            <div>
           <Table 
              onRow={(record) => ({
                onClick: (event) => { this.handleClick(event) },
                             })}  columns={colum} dataSource={data} />
            <Button onClick={this.handleClick} type="primary">BACK</Button>
        </div>

        )
    }
}
export default CustomerList;