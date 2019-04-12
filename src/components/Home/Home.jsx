import React from 'react';
import './Home.css';
import {Link, withRouter} from 'react-router-dom';
import {ButtonContainer} from '../Button/Button';
import CarltonGif from '../../img/Carlton_Dance.gif';

const Home = (props) => {
    return (
        <div className="titlecontainer">
        <h1>Welcome to Jokes-R-Us!</h1>
        <h3>Your source for the latest jokes, memes and shenanigans</h3>
            <Link to="/products" className="ml-auto">
                <button className="homePageButton">
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                        </span>
                        SHOP
                </button>
            </Link>
            <Link to="/signup" className="ml-auto">
                <button className="homePageButton">
                    <span className="mr-2">
                        <i className="fas fa-user" />
                    </span>
                    Create Account
                </button>
            </Link>
            <Link to="/login" className="ml-auto">
                <button className="homePageButton">
                    <span className="mr-2">
                        <i className="fas fa-user" />
                    </span>
                        Login
                </button>
            </Link>
            <br/>
            <img src={CarltonGif} alt="loading..." />                     
        </div>
    )
}


export default Home;