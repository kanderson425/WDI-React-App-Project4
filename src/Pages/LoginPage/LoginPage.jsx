import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import Bruce from '../../img/Bruce_Almighty.gif';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      console.log(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      console.log(this.props.history);
      // Successfully signed up - show ProductsPage
      this.props.history.push('/products');

    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <h1 className="text-center mt-5">Log In</h1>
        <form className="form mt-3" onSubmit={this.handleSubmit} >
          <div className="form-group mt-3">
            <div className="col-sm-4 inputContainer mt3">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-4 inputContainer">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-4 text-center inputContainer">
              <button id="authbtn" className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        <img className="mt-3" src={Bruce} alt="Bruce Almighty"/>
      </div>
    );
  }
};

export default withRouter(LoginPage);
