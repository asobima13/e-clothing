type CurrentUserState = {
    id: string,
    displayName: string,
    email: string,
    createdAt: number
} | null

type ErrorPayload = {
    message: string | null,
    location: string | null
}

interface Auth {
    type: 'AUTH';
    payload: CurrentUserState;
}

interface Signup {
    type: 'SIGNUP';
    payload: ErrorPayload;
}

interface Signin {
    type: 'SIGNIN';
    payload: ErrorPayload;
}

interface SigninWithGoogle {
    type: 'SIGNINWITHGOOGLE';
    payload: ErrorPayload;
}

interface Signout {
    type: 'SIGNOUT';
    payload: null;
}

export type UserAction = 
    Auth |
    Signup |
    Signin |
    SigninWithGoogle |
    Signout