import './CheckoutPage.scss'
import { useTypedSelector } from '../../store/hooks'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import PaymentButton from '../../components/payment-button/PaymentButton'
import { priceWithCommas } from '../../global.utils'

const CheckoutPage = () => {

    const { cartItems } = useTypedSelector(state => state.cart);
    const blocks = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
    const totalPrice = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
    
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
                <span>Total: IDR {priceWithCommas(totalPrice * 1000)}</span>
            </div>
            <PaymentButton price={totalPrice}/>
        </div>
    )
}

export default CheckoutPage
