import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from '../Button/Button';
import { ProductConsumer } from '../Context/Context';
import JazzCupPic from '../../img/Jazz_Cup.png';

class NavBar extends Component {
    render() {
        return (
        <div>
            {/* the first child of any consumer must be a function because it is wrapping the ui that are rendering */}
            <ProductConsumer>
                {({ handleLogout, user }) => { 
                    return (
                        (user) ?
                        <div>
                            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                                <Link to='/'>
                                    <img src={JazzCupPic} alt="store" className="navbar-brand"></img>
                                </Link>
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item ml-5">
                                        <Link to="/products" className="nav-link">
                                            Products
                                        </Link>
                                     </li>
                                </ul>
                                <Link to="/" 
                                    className="ml-auto"
                                    onClick={handleLogout}>
                                    <ButtonContainer>
                                    <span className="mr-2">
                                    <i className="fas fa-user" />
                                    </span>
                                        Logout
                                    </ButtonContainer>
                                </Link>
                                <Link to="/cart" className="ml-auto">
                                    <ButtonContainer>
                                    <span className="mr-2">
                                    <i className="fas fa-cart-plus" />
                                    </span>
                                        my cart
                                    </ButtonContainer>
                                </Link>
                            </NavWrapper>
                        </div>
                        :
                        <div>
                            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                                <Link to='/'>
                                    <img src={JazzCupPic} alt="store" className="navbar-brand"></img>
                                </Link>
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item ml-4">
                                        <Link to="/products" className="nav-link">
                                            Products
                                        </Link>
                                     </li>
                                </ul>
                                <Link to="/signup" className=" signupButton ml-auto">
                                    <ButtonContainer>
                                    <span className="mr-1">
                                        <i className="fas fa-user" />
                                    </span>
                                        Create Account
                                    </ButtonContainer>
                                </Link>
                                <Link to="/login" className=" loginButton ml-1">
                                    <ButtonContainer>
                                    <span className="mr-1">
                                        <i className="fas fa-user" />
                                    </span>
                                        Login
                                    </ButtonContainer>
                                </Link>
                            </NavWrapper>
                        </div>
                    );
                }
                }

            </ProductConsumer>
        </div>
        )
    }
}

const NavWrapper = styled.nav`
    background:var(--mainDark);
    .nav-link {
        color: val(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
export default NavBar;