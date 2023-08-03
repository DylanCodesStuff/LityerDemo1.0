import React, { useContext } from "react";
import data from "../DummyData/data";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem";

export const CheckoutPage = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="checkoutPage">
      <div>
        <h1 className="text-3xl text-center p-8">Your Cart Items</h1>
      </div>
      <div className="cart-items border-b border-t border-teal-300">
        {data.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
    </div>
  );
};
