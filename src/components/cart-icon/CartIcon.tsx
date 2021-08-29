import './CartIcon.scss'
import { useActions, useTypedSelector } from '../../store/hooks';

type CartItem = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
    quantity: number
}

const CartIcon = () => {

    const { toggleHidden } = useActions();
    const { cartItems } = useTypedSelector(state => state.cart)

    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <img src="assets/shopping-bag.svg" className="shopping-icon" alt=""/>
            <span className="item-count">{
                cartItems.reduce((accumulatedQuantity: number, cartItem: CartItem) => accumulatedQuantity + cartItem.quantity, 0)
            }</span>
        </div>
    )
}

export default CartIcon;