import './Header.scss'
import { Link } from 'react-router-dom'

import { useActions, useTypedSelector } from '../../store/hooks'

const Header = () => {

    const { currentUser } = useTypedSelector(state => state.user)
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
                        {`SIGN OUT (${currentUser.displayName})`}
                    </div> :
                    <Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
    );
}

export default Header;
