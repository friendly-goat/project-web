import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div id="main-container">
            <Link to="/" id='welcome'>Home</Link>
            <Link to="/shop" id='welcome'>Shop All</Link>
            <Link to="/about" id='welcome'>About</Link>
            <Link to="/contact" id='welcome'>Contact</Link>
            <Link to="/login" id='welcome'>Log In</Link>
        </div>
     );
}
 
export default Header;