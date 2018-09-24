import React, { Component } from 'react';
import { Drawer, Form, Icon, Button, Cascader,Table, Col, Row, Tabs,Input,
    Select, DatePicker,
  } from 'antd';


class CustomerProfile extends Component{
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
            Name: Michael Kelvin<br/>

                 Phone Number: +255 76688. Address P.o.box 1254 Dar es salaam, Tanzania<br/>
                 Age: 32 yrs<br/>
                 This is the time  Time<br/>
                 This is the installment  mm<br/>
                
            <Button onClick={this.handleClick} type="primary">BACK</Button>
        </div>

        )
    }
}
export default CustomerProfile;