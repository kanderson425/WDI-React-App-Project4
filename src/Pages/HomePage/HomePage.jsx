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
        <Home
          {...this.props}  
        />
      </div>
    );
  }
};

export default HomePage;