import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name,img,category,price,stock,shipping} = props.product
    return (
        <div className='card'>
            <img src={img} alt="" srcset="" />
            <p>Price:<i>${price}</i></p>
            <hr />
            <div className="product-info">
                <h4>{name}</h4>
                <p className='nth'>{category}</p>
                <p>Stock: <i className='heilight'>{stock}</i></p>
                <p className='nth'>Shipping:<i className='heilight'>{shipping}</i></p>
            </div>
            <span onClick={() => props.addToCard(props.product)} className='add-btn'>Add to Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
        </div>
    );
};

export default Product;