import React, { Component } from 'react';
import ListInstallmentInformation from './ListInstallmentInformation';
import InstallmentDescription from './InstallmentDescription';


class Installment extends Component{
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
            {!showLoanInformation ? (<ListInstallmentInformation onPathState={this.onPathState}
            />) : (<InstallmentDescription onPathStateAgain={this.onPathStateAgain} />)}
                       </div>
        )
    }
}
export default Installment;