import React, { Component } from 'react'
import { ProductConsumer } from '../Context/Context';
import LoginPage from '../../Pages/LoginPage/LoginPage';

export default class ContextTester extends Component {

    render() {
        return (
        <div>
            {/* the first child of any consumer must be a function because it is wrapping the ui that are rendering */}
            <ProductConsumer>
                {({ handleChange, handleSubmit, isFormInvalid, updateMessage, handleSignupOrLogin, history, cart }) =>{ 
                    return (
                        <div>
                            <LoginPage
                                handleSignupOrLogin = {handleSignupOrLogin}
                                handleSubmit = {handleSubmit}
                                handleChange= {handleChange}
                                isFormInvalid = {isFormInvalid}
                                updateMessage = {updateMessage}
                                history = {history} 
                                cart = {cart}
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