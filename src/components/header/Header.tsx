import './Header.scss'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/CartIcon'

import { useActions, useTypedSelector } from '../../store/hooks'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = () => {

    const { user: {currentUser}, cart: {hidden} } = useTypedSelector(state => state)
    const { doSignout } = useActions();

    const handleSignOut = () => {
        doSignout();
    }

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
                {
                    currentUser ?
                    <div className="option" onClick={handleSignOut}>
                        <span>SIGN OUT</span><br /><span>({currentUser.displayName})</span>
                    </div> :
                    <Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    );
}

export default Header;
