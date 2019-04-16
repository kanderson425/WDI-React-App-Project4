import React from 'react';
import Cart from '../../img/Shopping_Cart.gif';
import styled from 'styled-components';

function EmptyCart() {
    return (
        <div className="container mt-5 text-center">
            <div className="row">
                <div className="col-10 mx-auto mt-4 mb-5 text-center text-title">
                    <h1>Your cart is currently empty</h1>
                </div>
            </div>
            <img className="mt-5" src={Cart} alt="Shopping Cart Craze"/>
        </div>
    )
}

export default EmptyCart;



