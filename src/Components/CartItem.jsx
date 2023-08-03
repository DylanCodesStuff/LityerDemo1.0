import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = (props) => {
  const { img, title, description, price, id } = props.data;
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart-item" key={id}>
      <div className="cart-top-container gap-4">
        <img className="cart-item-img" src={img} />
        <div className="cart-top-text">
          <p className="cart-item-title text-xl font-semibold">{title}</p>
          <p className="cart-item-description">{description}</p>
        </div>
      </div>
      <div className="cart-bottom-container">
        <p className="cart-item-price">${price}</p>
        <p className="cart-item-quantity">Quantity: {cartItems[id]}</p>
      </div>
    </div>
  );
};

export default CartItem;
