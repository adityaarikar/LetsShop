import React from "react";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import IncrementDecrement from "../UI/IncrementDecrement";

const Message = () => {
  return (
    <div className={classes.messageContainer}>
      <h1>You haven't added any product to cart.</h1>
      <p>Please go to the following link and explor our brand new products.</p>
    </div>
  );
};

const ShowCart = (props) => {
  console.log(props);
  return (
    <div className={classes.showCartContainer}>
      <h1>Your Cart</h1>
      <div className={classes.mainContainer}>
        {Object.values(props.items).map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

const Item = (props) => {
  let amount = props.item.price;
  console.log(props.item);
  return (
    <div className={classes.itemContainer}>
      <div className={classes.imageContainer}>
        <img src={props.item.image} width={150} height={150} />
      </div>
      <div className={classes.textContainer}>
        <h3>{props.item.title}</h3>
        <p>Prics : {amount}</p>
        <IncrementDecrement />
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={classes.container}>
      {Object.keys(cartItems).length === 0 ? (
        <Message />
      ) : (
        <ShowCart items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
