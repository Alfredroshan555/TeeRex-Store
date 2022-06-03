import React from "react";
import CartList from "../components/CartList";
import { ContextFun } from "../context/context";

const Cart = () => {
  const { cartItems } = ContextFun();
  console.log("object", cartItems);
  return (
      <div className=" p-5">
         <CartList cartItems={cartItems} />
      </div>
  )
};

export default Cart;
