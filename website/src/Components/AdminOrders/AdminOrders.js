import React, { useState } from "react";
import axios from "axios";
const AdminOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    React.useEffect(() => {
      // console.log(document.session)
      // axios.post('http://localhost:5000/api/getSession', document.session).then((res) => {console.log(res.data)}).catch((err) => console.log(err))
      axios
        .get('http://localhost:5000/api/adminorders')
        .then((res) => {
          // console.log(res.data[0]);
          setAllOrders(res.data[0]);
        })
        .catch((err) => console.log(err));
    }, []);
    const [allItems, setAllItems] = useState([]);
    React.useEffect(() => {
      // console.log(document.session)
      // axios.post('http://localhost:5000/api/getSession', document.session).then((res) => {console.log(res.data)}).catch((err) => console.log(err))
      axios
        .get('http://localhost:5000/api/adminitems')
        .then((res) => {
          // console.log(res.data[0]);
          setAllItems(res.data[0]);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        ALL ORDERS
        <div id="o">
        <br />
        {allOrders.map((item) => (
          <div key={item.order_id}>
              id: {item.order_id}<br/>
              ordered by: {item.order_by_name}<br/>
              total cost: $ {item.total_cost}
              <br/><br/>
              </div>
        ))}
        <br/><br/>
        </div>
        ALL ITEMS
        <div id="i">
        <br />
        {allItems.map((item) => (
          <div key={item.order_id}>
              price: ${item.item_price * item.item_quantity}<br/>
              ordered by: {item.order_by_name}<br/>
              type: {item.item_name}<br/>
              quantity: {item.item_quantity}
              <br/><br/>
              </div>
        ))}
        </div>
      </div>
    );
  };
 
export default AdminOrders;