import './CartIcon.scss'
import { useActions, useTypedSelector } from '../../store/hooks';

const CartIcon = () => {

    const { toggleHidden } = useActions();
    const { cartItems } = useTypedSelector(state => state.cart)

    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <img src="assets/shopping-bag.svg" className="shopping-icon" alt=""/>
            <span className="item-count">{
                cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
            }</span>
        </div>
    )
}

export default CartIcon;