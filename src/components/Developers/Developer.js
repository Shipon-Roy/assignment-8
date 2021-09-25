import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';

const Developer = () => {
    const [developers, setDeveloper] = useState([])
    useEffect( () => {
        fetch('./developer.json')
        .then(res => res.json())
        .then(data => setDeveloper(data))
    }, [])

    const [cart, setCart] = useState([])
    const handleAddToCart = (addCart) => {
        const newCart = [...cart, addCart]
        setCart(newCart)
    }



    return (
        <div className="container">'
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                    {
                        developers.map(developer => <Employee
                            handleAddToCart = {handleAddToCart}
                            key = {developer.id} 
                            developer= {developer}
                            ></Employee>)
                    }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Developer;