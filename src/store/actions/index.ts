type CurrentUserState = {
    id: string,
    displayName: string,
    email: string,
    createdAt: number
} | null

interface Auth {
    type: 'AUTH';
    payload: CurrentUserState;
}

interface Signup {
    type: 'SIGNUP';
}

interface Signin {
    type: 'SIGNIN';
}

interface SigninWithGoogle {
    type: 'SIGNINWITHGOOGLE'
}

interface Signout {
    type: 'SIGNOUT';
    payload: null
}

export type Action = 
    Auth |
    Signup |
    Signin |
    SigninWithGoogle |
    Signout