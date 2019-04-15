import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

import '../SignUpPage/SignUpPage.css';
// import { ProductConsumer } from '../../components/Context/Context';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm 
          {...this.props} 
          updateMessage={this.updateMessage}
          history={this.props.history}  
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPage;

