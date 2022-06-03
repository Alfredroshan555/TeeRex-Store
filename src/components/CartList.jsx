import { useEffect } from "react";
import { React, useState } from "react";
import { Image, List, Icon } from "semantic-ui-react";
import { ContextFun } from "../context/context";

const CartList = ({ cartItems }) => {
  const { removeItem } = ContextFun();
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  // Remove item from the cart
  const removeFromCart = (id) => {
    removeItem(id);
  };
  //   Check the quantity of each item if add more than available quantity show error
  const checkAvailableQuantity = (id, qty, price) => {
    console.log("price", price, id, qty);
    console.log("qty", quantity);
    const cartItem = cartItems.find((i) => i.id === id);
    const cartItemId = cartItem.id;
    console.log("id", cartItemId);

    setTotalPrice(price * qty);

    if (quantity > qty) {
      alert("Maximum available quantity exceeded !!!");
    }
  };

  //   const itemPriceTotal = (e,id,price,qty) =>{
  //     setQuantity(e.target.value)
  //     console.log("total items",id,price,qty,quantity);
  //     const total = cartItems.map((i)=>  i.qty === quantity ? i.price * quantity : "")
  //     data = price * qty
  //     console.log("data",total);

  //   }

  return (
    <div className="mt-6">
      {cartItems.map((item) => {
        return (
          <>
            <List divided verticalAlign="middle" className="">
              <List.Item>
                <Image avatar src={item.imageURL} />
                <List.Content floated="right">
                  <Icon
                    className="trash mt-5"
                    onClick={() => removeFromCart(item.id)}
                  ></Icon>
                </List.Content>
                <List.Content>
                  {" "}
                  <h6>
                    {item.id}. {item.name}
                  </h6>
                  <h6 style={{ fontSize: "12px" }}>
                    Rs.{item.price * quantity}
                    <input
                      type="number"
                      name="Qty"
                      className="ml-6"
                      onInput={(e) => setQuantity(e.target.value)}
                    />
                    <Icon
                      onClick={() =>
                        checkAvailableQuantity(
                          item.id,
                          item.quantity,
                          item.price
                        )
                      }
                      className="add ml-2"
                    ></Icon>
                  </h6>
                </List.Content>
                <List.Content className="right">
                  <h4></h4>
                </List.Content>
              </List.Item>
            </List>
          </>
        );
      })}
    </div>
  );
};
// <Button onClick={()=>removeFromCart(item.id)}></Button>
export default CartList;
