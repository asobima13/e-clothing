import './CheckoutPage.scss'
import { useTypedSelector } from '../../store/hooks'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const CheckoutPage = () => {

    const { cartItems } = useTypedSelector(state => state.cart);
    const blocks = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {
                    blocks.map((block,idx) => (
                        <div key={idx} className="header-block"><span>{block}</span></div>
                    ))
                }
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">
                <span>Total: ${cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)}</span>
            </div>
        </div>
    )
}

export default CheckoutPage
