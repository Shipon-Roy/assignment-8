import React from 'react';
import './Employee.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';

const Employee = (props) => {

    const {img,name, email, age, company, selary} = props.developer;

    return (
        <div className="col-md-4 my-3">
            <div className="cart shadow-lg">
            <img className="w-100 rounded" src={img} alt="" />
            <div className="p-2">
                <h3>Name :{name}</h3>
                <p>E-mail: {email}</p>
                <p><small>Age: {age}</small></p>
                <p><small>Company: {company}</small></p>
                <h5>Selary: <FontAwesomeIcon icon={faFileInvoiceDollar}/> {selary}</h5>
                <button 
                    onClick={ () => props.handleAddToCart(props.developer)}
                className="btn btn-danger"
                ><FontAwesomeIcon icon={faAddressCard}/> Details</button>
            </div>
            </div>
        </div>
    );
};

export default Employee;