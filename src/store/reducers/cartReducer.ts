import { CartAction } from '../actions'
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils'

type InitialState = {
    hidden: boolean,
    cartItems: {
        id: number,
        imageUrl: string,
        name: string,
        price: number,
        quantity?: number
    }[]
}

const initialState = {
    hidden: true,
    cartItems: []
}

const reducer = (
    state: InitialState = initialState,
    action: CartAction
) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN':
            return {...state, hidden: !state.hidden}
        case 'ADD_ITEM':
            return {...state, cartItems: addItemToCart(state.cartItems, action.payload)}
        case 'REMOVE_ITEM':
            return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}
        case 'CLEAR_ITEM_FROM_CART':
            return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)}
        case 'EMPTY_CART':
            return {...state, cartItems: action.payload}
        default:
            return state;
    }
}

export default reducer;