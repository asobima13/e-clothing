import './CartItem.scss'
import { priceWithCommas } from '../../global.utils'

interface CartItemProps {
    item: {
        imageUrl: string;
        price: number;
        name: string;
        quantity: number;
    }
}

const CartItem = ({ item: {imageUrl, price, name, quantity} }: CartItemProps) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x IDR {priceWithCommas(price)}K</span>
            </div>
        </div>
    )
}

export default CartItem
