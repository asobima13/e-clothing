import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { useTypedSelector, useActions } from '../../store/hooks'
import { useHistory } from 'react-router'

const CartDropdown = () => {

    const { cartItems } = useTypedSelector(state => state.cart);
    const { toggleHidden } = useActions();
    const history = useHistory();

    const handleCheckout = () => {
        toggleHidden();
        history.push('/checkout')
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={handleCheckout} type="button">GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
