import "./Checkout.css";
const Checkout = ({ items , handleCart }) => {
  let cartItems = [];
    handleCart(cartItems)
  return (
    <div id="big">
      {cartItems.map((item) => (
        <div className="cart-container" key={item.id}>
          {item.name} {item.qnt} {item.price}
        </div>
      ))}
    </div>
  );
};
export default Checkout;
