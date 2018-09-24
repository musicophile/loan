import React, { Component } from 'react';
import { Drawer, Form, Icon, Button, Cascader,Table, Col, Row, Tabs,Input,
    Select, DatePicker,
  } from 'antd';

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

class ListLoanInformation extends Component{
    constructor(props){
        super(props);
        this.state = {
           // showLoanInformation: true,
        }
    }

  handleClick = () => {
    
    this.props.onPathState();
     }
    render(){
        return(
            <div>
  <div  >
              <Table onRow={(record) => ({
                onClick: (event) => { this.handleClick(event) },
                             })} columns={column} dataSource={data} />
            </div>
            </div>

        )
    }
}
export default ListLoanInformation;