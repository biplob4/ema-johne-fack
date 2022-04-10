import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import ProductRivew from "../ProductsRivew/ProductRivew";
import "./Order.css";

const Order = () => {
  const Navegate =useNavigate()
  const [products, setProducts] = useProducts([]);
  const [cart, setCart] = useCart(products);
  const clickH = (product) => {
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  const navigateHandel=()=>{
    Navegate(`/Inventory/`)
  }
  return (
    <div className="order-container">
      <div className="Previw">
        {cart.map((product) => (
          <ProductRivew
            key={cart.id}
            product={product}
            hendeler={clickH}
          ></ProductRivew>
        ))}
      </div>
      <div className="cart">
        <Cart card={cart}>
            <button onClick={navigateHandel}>order-sipping</button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
