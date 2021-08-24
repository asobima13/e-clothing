import { UserAction } from '../actions/userAction'

type InitialState = {
    currentUser: {
        id: string,
        displayName: string,
        email: string,
        createdAt: number
    } | null,
    error: {
        message: string | null,
        location: string | null
    }
}

const initialState = {
    currentUser: null,
    error: {
        message: null,
        location: null
    }
}

const reducer = (
    state: InitialState = initialState,
    action: UserAction
) => {
    switch (action.type) {
        case 'AUTH':
            return { ...state, currentUser: action.payload };
        case 'SIGNIN':
            return { ...state, error: action.payload};
        case 'SIGNUP':
            return { ...state, error: action.payload};
        case 'SIGNINWITHGOOGLE':
            return { ...state, error: action.payload};
        case 'SIGNOUT':
            return { ...state, currentUser: action.payload};
        default:
            return state;
    }
}

export default reducer;