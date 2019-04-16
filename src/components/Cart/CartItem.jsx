import React from 'react';

function CartItem({item, value}) {
    const{id, title, img, price, total, count} = item;
    const{increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                src={img} 
                style={{width: '8rem', height:'8rem'}}
                className='img-fluid' 
                alt='Product' />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1 bg-white" onClick={() => decrement(id)}>
                        -
                        </span>
                        <span className="btn btn-black mx-1 bg-white">{count}</span>
                        <span className="btn btn-black mx-1 bg-white" onClick={() => increment(id)}>
                        +
                        </span>
                    </div>
                </div>
            
            </div>
        {/*  */}
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash trash-icon" />
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <strong>item total: $ {total}</strong>
        </div>
        </div>
    )
}

export default CartItem; 