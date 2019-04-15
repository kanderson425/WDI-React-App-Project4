import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';
import Modal from './components/Modal/Modal';
import Home from './components/Home/Home';
// import SignUp from './Pages/SignUpPage/SignUpPage';
import SignupContextTester from './components/Auth/SignupContext';
import LoginContextTester from './components/Auth/LoginContext';



class App extends Component {
  render() {
    return (
      <>
        <NavBar
          handleLogout={this.handleLogout} 
        />
        <Switch>
          <Route exact path="/" 
            component={Home}
            />
          <Route exact path="/products" component={ProductList}/>
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signup" component={SignupContextTester} />
          <Route exact path="/login" component={LoginContextTester} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    );
  }
}

export default App;
