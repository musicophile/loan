import React, { Component } from 'react';
import { Button } from 'antd';
import Feedback from './Feedback';
import BasicDetails from './BasicDetails';


class Loanform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoanSummary: false
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
      sevisible: false,
      visibl: false,
      visibleee: false,
    });
  };


  onClickNext = () => {
    this.setState({
      showLoanSummary: true
    });
  };

  onClickCreateLoan = () => {

  }

  onClickBackToForm = () =>{
    this.setState({
      showLoanSummary: false
    });
  }

  render() {
    const { showLoanSummary } = this.state;
    return (
      <div>
        {!showLoanSummary ? (<BasicDetails />) : (<Feedback />)}
        <div
          style={{
            // position: 'absolute',
            // bottom: 0,
            width: '100%',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >

        {
           !showLoanSummary ? <Button onClick={this.onClose} > Cancel </Button> : 
           <Button onClick={this.onClickBackToForm} >Go Back</Button>
        }
              
          {
            !showLoanSummary ? <Button onClick={this.onClickNext} type="primary">Next</Button> :

              <Button onClick={this.onClickCreateLoan} type="primary">Create Loan</Button>
          }
        </div>
      </div>

    )
  }
};
export default Loanform;
