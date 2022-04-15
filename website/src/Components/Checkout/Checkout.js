import "./Checkout.css";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Checkout = ({ items }) => {
  let counter = 0;
  let total = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      counter = counter + arr[i].item_price * arr[i].quantity;
    }
    return counter;
  };
  let handleCart = () => {
    let cartArr = []
    for(let i = 0; i < items.length; i++){
      if(items[i].quantity !== 0){
        cartArr.push(items[i])
      }
    }
    return cartArr
  }
  return (
    <div id="big">
      <div id="total-container">total: ${total(items)}.00</div>
      {handleCart().map((item) => (
        <div className="cart-container" key={item.item_id}>
          <div id="item-head">{item.item_name}</div>
          <div id="price" style={{ color: "red" }}>
            Price: {item.item_price}
          </div>
          Quantity: {item.quantity}
        </div>
      ))}
      <Link
        to="/checkout"
        id="checkoutBtn"
        onClick={() => {
          axios.post('http://localhost:5000/api/cart', handleCart())
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err))
        }}
      >
        Checkout
      </Link>
    </div>
  );
};
export default Checkout;