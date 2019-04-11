import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from '../../logo2.png';
import styled from 'styled-components';
import {ButtonContainer} from '../Button/Button';
import { ProductConsumer } from '../Context/Context';

// Dynamic NavBar
// const NavBar = (props) => {
//     let nav = props.user ?
//         <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
//             <Link to='/'>
//                 <img src={logo} alt="store" className="navbar-brand"></img>
//             </Link>
//             <ul className="navbar-nav align-items-center">
//                 <li className="nav-item ml-5">
//                     <Link to="/products" className="nav-link">
//                     Products
//                     </Link>
//                 </li>
//             </ul>
//             <Link to="/cart" className="ml-auto">
//                 <ButtonContainer>
//                     <span className="mr-2">
//                     <i className="fas fa-cart-plus" />
//                     </span>
//                     my cart
//                 </ButtonContainer>
//             </Link>
//             <Link to="/" className="ml-auto" onClick={this.props.handleLogout}>
//                 <ButtonContainer>
//                     <span className="mr-2">
//                     <i className="fas fa-user" />
//                     </span>
//                     Logout
//                 </ButtonContainer>
//             </Link>
//         </NavWrapper>
//             :
//         <NavWrapper>
//             <Link to='/'>
//                 <img src={logo} alt="store" className="navbar-brand"></img>
//             </Link>
//             <Link to="/signup" className="ml-auto">
//                 <ButtonContainer>
//                     <span className="mr-2">
//                     <i className="fas fa-user" />
//                     </span>
//                     Create Account
//                 </ButtonContainer>
//             </Link>
//             <Link to="/login" className="ml-auto">
//                 <ButtonContainer>
//                     <span className="mr-2">
//                     <i className="fas fa-user" />
//                     </span>
//                     Login
//                 </ButtonContainer>
//             </Link>
//         </NavWrapper>

//     return (
//         <div className='NavBar'>
//         {nav}
//         </div>
//     );
// }

// class NavBar extends Component {
//     render() {
//     return (
//     <div>
//         <ProductConsumer>
//         {({ handleLogout }) => { 
//             return (
//             <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
//                 <Link to='/'>
//                     <img src={logo} alt="store" className="navbar-brand"></img>
//                 </Link>
//                 <ul className="navbar-nav align-items-center">
//                     <li className="nav-item ml-5">
//                         <Link to="/products" className="nav-link">
//                         Products
//                         </Link>
//                     </li>
//                 </ul>
//                 <Link to="/signup" className="ml-auto">
//                     <ButtonContainer>
//                         <span className="mr-2">
//                         <i className="fas fa-user" />
//                         </span>
//                         Create Account
//                     </ButtonContainer>
//                 </Link>
//                 <Link to="/login" className="ml-auto">
//                     <ButtonContainer>
//                         <span className="mr-2">
//                         <i className="fas fa-user" />
//                         </span>
//                         Login
//                     </ButtonContainer>
//                 </Link>
//                 <Link to="/" 
//                 className="ml-auto"
//                 onClick={this.props.handleLogout}
//                 >
//                     <ButtonContainer>
//                         <span className="mr-2">
//                         <i className="fas fa-user" />
//                         </span>
//                         Logout
//                     </ButtonContainer>
//                 </Link>
//                 <Link to="/cart" className="ml-auto">
//                     <ButtonContainer>
//                         <span className="mr-2">
//                         <i className="fas fa-cart-plus" />
//                         </span>
//                         my cart
//                     </ButtonContainer>
//                 </Link>
//             </NavWrapper>
//                 );
//         }
//     }
//         </NavWrapper>
//     </div>




/*NavBar is working, but dynamic isn't */
class NavBar extends Component {
    render() {
        return (
        <div>
            {/* the first child of any consumer must be a function because it is wrapping the ui that are rendering */}
            <ProductConsumer>
                {({ handleLogout }) => { 
                    return (
                        (this.user) ?
                        <div>
                            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                                <Link to='/'>
                                    <img src={logo} alt="store" className="navbar-brand"></img>
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
                                    <img src={logo} alt="store" className="navbar-brand"></img>
                                </Link>
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item ml-5">
                                        <Link to="/products" className="nav-link">
                                            Products
                                        </Link>
                                     </li>
                                </ul>
                                <Link to="/signup" className="ml-auto">
                                    <ButtonContainer>
                                    <span className="mr-2">
                                        <i className="fas fa-user" />
                                    </span>
                                        Create Account
                                    </ButtonContainer>
                                </Link>
                                <Link to="/login" className="ml-auto">
                                    <ButtonContainer>
                                    <span className="mr-2">
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
    background:var(--mainBlue);
    .nav-link {
        color: val(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
export default NavBar;