import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div id="main-container">
            <Link to="/" id='welcome'>Home</Link>
            <Link to="/shop" id='welcome'>Shop All</Link>
            <p id="welcome">About</p>
            <p id="welcome">Contact</p>
            <p id="welcome">Log In</p>
        </div>
     );
}
 
export default Header;