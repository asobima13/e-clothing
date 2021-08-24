import { CartAction } from '../actions'
import { addItemToCart } from '../utils/cartUtils'

type InitialState = {
    hidden: boolean,
    cartItems: any[]
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
            // return {...state, cartItems: [...state.cartItems, action.payload]}
        default:
            return state;
    }
}

export default reducer;