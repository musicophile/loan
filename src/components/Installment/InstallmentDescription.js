import React, { Component } from 'react';
import { Button, Table  } from 'antd';

const column = [{
    title: 'Month',
    dataIndex: 'Month',
  
  },   {
    title: 'Principal',
    dataIndex: 'principal',
  
  }, {
    title: 'Date Created',
    dataIndex: 'Datee',
  }];

  const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    
    Month: `month ${i}`,

    principal: 250000 + i,
    
    Datee: 1 - 12 - 2018,

  });
}

class InstallmentDescription extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    handleClick = () => {
    
        this.props.onPathStateAgain();
         }
    render(){
        return(
            <div>
            <br/>
            <div  >
            Cheque: 1256 - 4581 - 2548
              <Table onRow={(record) => ({  })}
               columns={column} dataSource={data} />
            </div>
            <Button onClick={this.handleClick} type="primary">BACK</Button>
        </div>

        )
    }
}
export default InstallmentDescription;