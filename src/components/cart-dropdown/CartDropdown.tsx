import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton type="button">GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
