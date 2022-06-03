import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const FunctionContext = createContext();

export function FunctionContextProvider({ children }) {
  const [items, setItems] = useState([]);
  let cartItems = [];

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((res) => {
        setItems(res.data);
      });
  }, []);
  //   console.log("context",items);
  function addToCart(id, qty) {
    console.log("clicked", id, qty);

    let filteredItems = items.filter((item) => item.id === id);
    const selectedItem = cartItems.find((item) => item.id === id);
    if (!cartItems.includes(selectedItem)) {
      cartItems.push(...filteredItems);
    } else {
      alert("Item is already in your cart, please check your cart .");
    }
  }
  function removeItem(id) {
    console.log("removed", id);
    cartItems.splice(id);
    console.log("cart", cartItems);
  }

  return (
    <FunctionContext.Provider
      value={{ items, addToCart, cartItems, removeItem }}
    >
      {children}
    </FunctionContext.Provider>
  );
}

export function ContextFun() {
  return useContext(FunctionContext);
}
