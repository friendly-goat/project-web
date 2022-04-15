import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/homePage/Home";
import Shop from "./Pages/shopPage/shop";
import Error from "./Pages/errorPage/Error";
import About from "./Pages/aboutPage/About";
import Login from "./Pages/loginPage/Login";
import CheckoutPage from "./Pages/checkoutPage/Checkout";
import ContactPage from "./Pages/ContactPage/ContactPage";
import SignUpPage from "./Pages/signUpPage/SignUpPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
