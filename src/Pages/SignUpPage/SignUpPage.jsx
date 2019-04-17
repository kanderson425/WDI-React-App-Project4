import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import '../SignUpPage/SignUpPage.css';
// import { ProductConsumer } from '../../components/Context/Context';

class SignUpPage extends Component {
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
        <SignUpForm 
          {...this.props} 
          updateMessage={this.updateMessage}
          history={this.props.history}  
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignUpPage;

