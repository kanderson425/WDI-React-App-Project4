import React, { Component } from 'react'
import { ProductConsumer } from '../Context/Context';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';

export default class ContextTester extends Component {

    render() {
        return (
        <div>
            {/* the first child of any consumer must be a function because it is wrapping the ui that are rendering */}
            <ProductConsumer>
                {({ handleChange, handleSubmit, isFormInvalid, updateMessage, handleSignupOrLogin, history, handleLogout, cart }) =>{ 
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
                                cart={cart}
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