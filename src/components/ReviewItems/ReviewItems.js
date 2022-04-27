import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItems = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, price, shipping, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt='' />
            </div>
            <div className='detail-container'>
                <div className='review-item-detail'>
                    <p className='product-name' title={name}>
                        {name.length > 18 ? name.slice(0, 18) + '...' : name}
                    </p>
                    <p>price: ${price}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;