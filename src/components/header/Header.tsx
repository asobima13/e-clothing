import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img src="assets/logo-black.png" alt=""/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Header;
