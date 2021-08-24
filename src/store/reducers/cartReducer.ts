import { CartAction } from '../actions'

type InitialState = {
    hidden: boolean
}

const initialState = {
    hidden: true
}

const reducer = (
    state: InitialState = initialState,
    action: CartAction
) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN':
            return {...state, hidden: !state.hidden}
        default:
            return state;
    }
}

export default reducer;