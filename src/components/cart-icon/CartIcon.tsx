import './CartIcon.scss'
import { useActions } from '../../store/hooks';

const CartIcon = () => {

    const { toggleHidden } = useActions();

    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <img src="assets/shopping-bag.svg" className="shopping-icon" alt=""/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;