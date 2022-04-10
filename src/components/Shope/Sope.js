import React from "react";
import { Link } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import Product from "../Card/Product";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import "./Shope.css";

const Sope = () => {
  const [products, setProducts] = useProducts([]);
  const [cart, setCard] = useCart(products);

  const addToCard = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => selectedProduct.id === product.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => selectedProduct.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCard(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shope">
      <div className="cart">
        <Cart card={cart}>
          <Link to="/order">
            <button>Review Order </button>
          </Link>
        </Cart>
      </div>
      <div className="product">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCard={addToCard}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Sope;
