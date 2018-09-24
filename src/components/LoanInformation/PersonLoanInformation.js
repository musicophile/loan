import React, { Component } from 'react';
import { Button} from 'antd';


class PersonLoanInformation extends Component{
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
                 This is the principal Principal<br/>
                 This is the interest Interest<br/>
                 This is the time  Time<br/>
                 This is the installment  mm<br/>
                
            <Button onClick={this.handleClick} type="primary">BACK</Button>
        </div>

        )
    }
}
export default PersonLoanInformation;