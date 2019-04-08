import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
          
        </Switch>
      </React.Fragment>
      

    );
  }
}

export default App;
