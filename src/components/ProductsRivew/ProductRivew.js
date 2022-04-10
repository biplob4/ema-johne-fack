import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductRivew.css";

const ProductRivew = (props) => {
  const { product, hendeler } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: <span className="orange-color">${price}</span>
          </p>
          <p>
          Shipping: <span className="orange-color">${shipping}</span>
          </p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="delete-container">
          <a onClick={() => hendeler(product)} className="delete-button">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductRivew;
