import React, { Component } from 'react'
import { ProductConsumer } from '../Context/Context';
import {Link} from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';
import NavBar from '../NavBar/NavBar';
import LoginPage from '../../Pages/LoginPage/LoginPage';

export default class ContextTester extends Component {

    render() {
        return (
        <div>
            {/* the first child of any consumer must be a function because it is wrapping the ui that are rendering */}
            <ProductConsumer>
                {({ handleChange, handleSubmit, isFormInvalid, updateMessage, handleSignupOrLogin, history, handleLogout }) =>{ 
                    return (
                        <div>
                            <SignUpPage 
                                handleChange = {handleChange}
                                handleSubmit = {handleSubmit}
                                isFormInvalid = {isFormInvalid}
                                updateMessage = {updateMessage}
                                handleSignupOrLogin = {handleSignupOrLogin}
                                history = {history}
                                handleLogOut={handleLogout}
                            />
                        </div>
                      );
                }
                }

            </ProductConsumer>

        </div>
        )
    }
}