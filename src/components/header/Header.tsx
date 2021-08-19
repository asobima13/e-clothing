import './Header.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

type CurrentUser = {
    id: string,
    displayName: string,
    email: string,
    createdAt: string
  } | null

interface AppProps {
    currentUser: CurrentUser;
    setCurrentUser: (currentUser: CurrentUser) => void;
}

const Header = ( {currentUser, setCurrentUser}: AppProps ) => {

    const handleSignOut = () => {
        auth.signOut()
        setCurrentUser(null)
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
                        SIGN OUT
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
