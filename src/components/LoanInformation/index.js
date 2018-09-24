import React, { Component } from 'react';
import { Button } from 'antd';
import ListLoanInformation from './ListLoanInformation';
import PersonLoanInformation from './PersonLoanInformation';


class LoanInformation extends Component{
    constructor(props){
        super(props);
        this.state = {
            showLoanInformation: false
        }
       }
    onPathState = () => {

        this.setState({showLoanInformation : true},)
      }
      onPathStateAgain = () => {
        this.setState({showLoanInformation : false},)
      }
    render(){
        const { showLoanInformation } = this.state;
        return(
            <div>
            {!showLoanInformation ? (<ListLoanInformation onPathState={this.onPathState}
            />) : (<PersonLoanInformation onPathStateAgain={this.onPathStateAgain} />)}
                       </div>
        )
    }
}
export default LoanInformation;