import React from 'react';

const Cart = (props) => {
    const {cart} = props || {}
    let total = 0;
    for(const employee of cart){
        total = total + employee.selary;
    }
    return (
        <div>
            <h3>Total Developer:{cart.length}</h3>
            <h5>Developer Selary:$ {total}</h5>
            <ol>
                {
                    cart.map(employee => <li>{employee.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;