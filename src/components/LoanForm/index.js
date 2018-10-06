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
<<<<<<< HEAD
=======
  onClose = () => {
    this.setState({
      visible: false,
      sevisible: false,
      visibl: false,
      visibleee: false,
    });
  };

>>>>>>> ceb335741443767de08c95cd74d05ddcf59fb0de
  onClickNext = () => {
    this.setState({
      showLoanSummary: true
    });
  };

  onClickCreateLoan = () => {

  }
<<<<<<< HEAD
  onClickBackToForm = () =>{
    this.setState({
      showLoanSummary: false
    });
  }
=======
>>>>>>> ceb335741443767de08c95cd74d05ddcf59fb0de

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
<<<<<<< HEAD
            borderRight: '1px solid #e8e8e8',
=======
            borderTop: '1px solid #e8e8e8',
>>>>>>> ceb335741443767de08c95cd74d05ddcf59fb0de
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >
<<<<<<< HEAD
        {
           !showLoanSummary ? <Button onClick={this.onClose} > Cancel </Button> : 
           <Button onClick={this.onClickBackToForm} >Go Back</Button>
        }
          {
            !showLoanSummary ? <Button onClick={this.onClickNext} type="primary" >Next</Button> :
=======
          <Button
            style={{
              marginRight: 8,
            }}
            onClick={this.onClose}
          >
            Cancel
          </Button>
          {
            !showLoanSummary ? <Button onClick={this.onClickNext} type="primary">Next</Button> :
>>>>>>> ceb335741443767de08c95cd74d05ddcf59fb0de
              <Button onClick={this.onClickCreateLoan} type="primary">Create Loan</Button>
          }
        </div>
      </div>

    )
  }
};
export default Loanform;
