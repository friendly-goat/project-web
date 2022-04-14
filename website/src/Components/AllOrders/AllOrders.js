import React, { useState } from "react";
import axios from "axios";
const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:5000/api/orders')
      .then((res) => {
        console.log(res.data[0]);
        setAllOrders(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {allOrders.map((item) => (
        <div key={item.order_id}>
            id: {item.order_id}<br/>
            ordered by: {item.order_by_name}<br/>
            total cost: $ {item.total_cost}<br/><br/>
            </div>
      ))}
    </div>
  );
};

export default AllOrders;
