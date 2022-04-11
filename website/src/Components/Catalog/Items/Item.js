import { useState } from "react";
import React from "react"
import axios from "axios";
import "./Item.css";
import Checkout from "../../Checkout/Checkout";
// good production way to  get pics that are on public folder: process.env.PUBLIC_URL + `/Imgs/img${item.id}.jpg`
const Item = () => {
  const [items, setItems] = useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/items').then((res) => {
      setItems(res.data)
    }).catch((err) => console.log(err))
  }, [])
  // let [count, setCount] = useState(0);
  // can add functions here
  const handleInc = (id) => {
    const newItems = items.filter((item) => {
      if (item.id === id) {
        item.qnt++
      }
      return item;
    });
    setItems(newItems)
  };
  const handleDec = (id) => {
    const newItems = items.filter((item) => {
      if ((item.id === id) && (item.qnt > 0)) {
        item.qnt--
      }
      return item;
    });
    setItems(newItems);
  };
  const handleCart = (cartItems) => {
    cartItems = items.filter((item) => {
      if(item.qnt !== 0){
        cartItems.push(item)
      }
      return cartItems
    })
    return cartItems
  }

  // <Checkout items={items} handleCart={handleCart}/>
  // COUNTER NOT WORKING AT ALL, STATES ARE ALL MESSED UP, but hey, at least they look nice
  return (
    <div id="item-container">
      <Checkout items={items} handleCart={handleCart}/>
      {items.map((item) => (
        <div className="item-preview" key={item.id}>
          <img id="item-pic" src={item.img} alt="..." />
          <h2>{item.name}</h2>
          <p>Price: ${item.price}.00</p>
          <div id="quant-container">
            <button id="btn" onClick={() => handleDec(item.id)}>
              -
            </button>
            <div id="counting">{item.qnt}</div>
            <button id="btn" onClick={() => handleInc(item.id)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

/*
big k -20
small k - 12
pasha - 28
s basked - 55 - s k, p, 6 egg, candle
b basket - 80 - b k, p, 12 egg, candle
1 egg -1
*/
