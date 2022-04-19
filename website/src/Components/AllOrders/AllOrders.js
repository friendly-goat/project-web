import React, { useState } from "react";
import axios from "axios";
const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  React.useEffect(() => {
    // console.log(document.session)
    // axios.post('http://localhost:5000/api/getSession', document.session).then((res) => {console.log(res.data)}).catch((err) => console.log(err))
    axios
      .post('http://localhost:5000/api/orders', document.session)
      .then((res) => {
        // console.log(res.data[0]);
        setAllOrders(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlDelete = (id) => {
    let arr = allOrders.filter(ord => ord.order_id !== id)
    console.log(arr)
    setAllOrders(arr)
  }
  return (
    <div>
      {allOrders.map((item) => (
        <div key={item.order_id}>
            id: {item.order_id}<br/>
            ordered by: {item.order_by_name}<br/>
            total cost: $ {item.total_cost}
            <button onClick={() => {
              axios
              .delete(`http://localhost:5000/api/order/${item.order_id}`)
              .then(() => {handlDelete(item.order_id)})
              }}>X</button>
            <br/><br/>
            </div>
      ))}
    </div>
  );
};

export default AllOrders;
