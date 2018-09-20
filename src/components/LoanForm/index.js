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
            borderTop: '1px solid #e8e8e8',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >
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
              <Button onClick={this.onClickCreateLoan} type="primary">Create Loan</Button>
          }
        </div>
      </div>

    )
  }
};
export default Loanform;
