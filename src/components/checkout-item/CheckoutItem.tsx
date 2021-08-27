import './CheckoutItem.scss'
import { useActions } from '../../store/hooks'

interface CartItemProps {
    cartItem: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
        quantity: number;
    }
}

const CheckoutItem = ({cartItem}: CartItemProps) => {

    const {name, imageUrl, price, quantity} = cartItem;
    const { clearItemFromCart, addItem, removeItem } = useActions();

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
            </div>
            <span className="price">{price}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem
