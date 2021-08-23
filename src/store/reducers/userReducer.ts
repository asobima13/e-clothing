import { Action } from '../actions'

type InitialState = {
    currentUser: {
        id: string,
        displayName: string,
        email: string,
        createdAt: number
    } | null
}

const initialState = {
    currentUser: null
}

const reducer = (
    state: InitialState = initialState,
    action: Action
) => {
    switch (action.type) {
        case 'AUTH':
            return { ...state, currentUser: action.payload }
        case 'SIGNIN':
            return state;
        case 'SIGNUP':
            return state;
        case 'SIGNINWITHGOOGLE':
            return state;
        case 'SIGNOUT':
            return { ...state, currentUser: action.payload};
        default:
            return state;
    }
}

export default reducer;