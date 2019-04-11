import React, { Component } from 'react';
import './HomePage.css';
import Home from '../../components/Home/Home';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  render() {
    return (
      <div className='HomePage'>
        <h1>Is this thing working?</h1>
        <Home
          {...this.props}  
        />
      </div>
    );
  }
};

export default HomePage;