import "./Checkout.css";
const Checkout = ({ items, handleCart }) => {
  let cartItems = [];
  handleCart(cartItems);
  let counter = 0;
  let total = (cartItems) => {
    for (let i = 0; i < cartItems.length; i++) {
      counter = counter + cartItems[i].price * cartItems[i].qnt;
    }
    return counter;
  };
  return (
    <div id="big">
      <div id="total-container">total: ${total(cartItems)}.00</div>
      {cartItems.map((item) => (
        <div className="cart-container" key={item.id}>
          <div id="item-head">{item.name}</div>
          <div id="price" style={{ color: "red" }}>
            Price: {item.price}
          </div>
          Quantity: {item.qnt}
        </div>
      ))}
    </div>
  );
};
export default Checkout;
