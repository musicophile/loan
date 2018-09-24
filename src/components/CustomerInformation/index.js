import React, { Component } from 'react';
import CustomerProfile from './CustomerProfile';
import CustomerList from './CustomerList';


class CustomerInformation extends Component{
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
            {!showLoanInformation ? (<CustomerList onPathState={this.onPathState}
            />) : (<CustomerProfile onPathStateAgain={this.onPathStateAgain} />)}
                       </div>
        )
    }
}
export default CustomerInformation;