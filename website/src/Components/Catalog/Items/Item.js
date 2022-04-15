import { useState } from "react";
// import { Link } from 'react-router-dom';
import React from "react"
import axios from "axios";
import "./Item.css";
import Checkout from "../../Checkout/Checkout";
// good production way to  get pics that are on public folder: process.env.PUBLIC_URL + `/Imgs/img${item.id}.jpg`
const Item = () => {
  const [items, setItems] = useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/items').then((res) => {
      // console.log(res.data)
      // //setItems(res.data[0])
      for(let i = 0; i < res.data[0].length; i++){
        res.data[0][i].quantity = 0
      }
      setItems(res.data[0])
      // console.log(res.data[0])
    }).catch((err) => console.log(err))
  }, [])
  
  const handleAdd = (id) =>{
    const newItems = items.filter((item) => {
      if(item.item_id === id){
        item.quantity++
      }
      return item
    })
    setItems(newItems)
  }
  const handleDlt = (id) =>{
    const newItems = items.filter((item) => {
      if((item.item_id === id) && (item.quantity !== 0)){
        item.quantity--
      }
      return item
    })
    setItems(newItems)
  }
  return(
    <div id="item-container">
    <Checkout items={items} />
    {items.map((item) => (
      <div className="item-preview" key={item.item_id}>
        <img id="item-pic" src={item.item_img} alt="..." />
        <h2>{item.item_name}</h2>
        <p>Price: ${item.item_price}.00</p>
        <div id="quant-container">
          <button id="btn" onClick={() => handleDlt(item.item_id)}>
            -
          </button>
          <div id="counting">{item.quantity}</div>
          <button id="btn" onClick={() => handleAdd(item.item_id)}>
            +
          </button>
        </div>
      </div>
    ))}
  </div>
  )
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
