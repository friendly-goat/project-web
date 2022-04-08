import { useState } from "react";
import "./Item.css";
import Checkout from "../../Checkout/Checkout";
// good production way to  get pics that are on public folder: process.env.PUBLIC_URL + `/Imgs/img${item.id}.jpg`
const Item = () => {
  const [items, setItems] = useState([
    {
      qnt: 0,
      id: 1,
      name: "Big Kulich",
      description: "lorem ipsum...",
      price: 20,
      img: "https://media.istockphoto.com/photos/easter-cake-with-a-white-cap-made-of-icing-and-colored-powder-on-picture-id666675590?k=20&m=666675590&s=612x612&w=0&h=lteAL6fLVdSI8R8iq2PrQxtSiOLRk9HHweIIjxS_Qnc=",
    },
    {
      qnt: 0,
      id: 2,
      name: "Small Kulich",
      description: "lorem ipsum...",
      price: 12,
      img: "https://media.istockphoto.com/photos/easter-cake-with-a-white-cap-made-of-icing-and-colored-powder-on-picture-id666675590?k=20&m=666675590&s=612x612&w=0&h=lteAL6fLVdSI8R8iq2PrQxtSiOLRk9HHweIIjxS_Qnc=",
    },
    {
      qnt: 0,
      id: 3,
      name: "Pasha",
      description: "lorem ipsum...",
      price: 28,
      img: "https://assets.epicurious.com/photos/560df214f9a84192308a84fa/4:6/w_232,h_348,c_limit/109329.jpg",
    },
    {
      qnt: 0,
      id: 4,
      name: "Painted Egg",
      description: "lorem ipsum...",
      price: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Easter_eggs_-_onion_decoration.jpg/1280px-Easter_eggs_-_onion_decoration.jpg",
    },
    {
      qnt: 0,
      id: 5,
      name: "Large Basket",
      description: "lorem ipsum...",
      price: 80,
      img: "https://i.pinimg.com/originals/3c/b6/ee/3cb6eedde5e0904519ffc2e373873e99.jpg",
    },
    {
      qnt: 0,
      id: 6,
      name: "Small Basket",
      description: "lorem ipsum...",
      price: 55,
      img: "https://cdn.pixabay.com/photo/2019/04/25/12/09/happy-easter-4154655_960_720.jpg",
    },
  ]);
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
