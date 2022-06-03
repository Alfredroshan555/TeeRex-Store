import React from "react";
import { Card, Button, Icon, Image } from "semantic-ui-react";
import { ContextFun } from "../context/context";
import "../App.css";

const CardExampleCard = ({ items }) => {
  const { addToCart } = ContextFun();

  const addItemToCart = async (id,qty) => {
    await addToCart(id,qty);
  };

  return (
    <main className="grid m-6 pt-5">
      {items.map((i) => {
        return (
          <article>
            <div>
              <img src={i.imageURL} alt="Sample photo" className="p-3" />
              <div className="text">
                <Card.Content>
                  <Card.Header>
                    <h4>{i.name}</h4>
                  </Card.Header>
                  <Card.Meta>
                    <h6>Only {i.quantity} left !!!</h6>
                  </Card.Meta>
                </Card.Content>

                <p></p>
                <Card.Description>
                  <span>$ {i.price}</span>
                </Card.Description>
                <Button active className="mt-1">
                  {i.gender}
                </Button>
                <Button
                  animated="vertical"
                  className="mt-3"
                  onClick={() => addItemToCart(i.id,i.quantity)}
                >
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default CardExampleCard;
