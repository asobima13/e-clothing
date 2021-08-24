import { Dispatch } from "redux";
import { auth, createUserProfileDocument, signInWithGoogle } from "../../firebase/firebase.utils"

type CurrentUser = {
    id: string,
    displayName: string,
    email: string,
    createdAt: number
}

type SigninForm = {
    email: string,
    password: string
}

type RegisterForm = {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const doAuth = () => {
    return async (dispatch: Dispatch) => {

        auth.onAuthStateChanged( async (userAuth) => {
    
            if (userAuth) {
                const useRef = await createUserProfileDocument(userAuth);
    
                useRef?.onSnapshot(snapshot => {
                    const { displayName, email, createdAt }: any = snapshot.data();
    
                    const currentUser: CurrentUser = {
                        id: snapshot.id,
                        displayName: displayName,
                        email: email,
                        createdAt: createdAt
                    }
    
                    dispatch({
                        type: 'AUTH',
                        payload: currentUser
                    })
    
                    
                })
            }
    
        })
    
    }
}

export const doSignup = (form: RegisterForm, cb: () => void) => {
    return async (dispatch: Dispatch) => {

        const { displayName, email, password, confirmPassword } = form;
        
        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            cb()
            dispatch({
                type: 'SIGNUP',
                payload: {
                    message: null,
                    location: null
                }
            })
        } catch (err) {
            console.log('Error registering new user: ', err.message)
            dispatch({
                type: 'SIGNUP',
                payload: {
                    message: err.message,
                    location: 'signup'
                }
            })
        }

    }
}

export const doSignin = (form: SigninForm) => {
    return async (dispatch: Dispatch) => {

        try {
            const { email, password } = form;
            await auth.signInWithEmailAndPassword(email, password);
            dispatch({
                type: 'SIGNIN',
                payload: {
                    message: null,
                    location: null
                }
            })
        } catch (err) {
            console.log('Error signing in: ', err.message)
            dispatch({
                type: 'SIGNIN',
                payload: {
                    message: err.message,
                    location: 'signin'
                }
            })
        }

    }
}

export const doSigninWithGoogle = () => {
    return async (dispatch: Dispatch) => {

        try {
            await signInWithGoogle();
            dispatch({
                type: 'SIGNINWITHGOOGLE',
                payload: {
                    message: null,
                    location: null
                }
            })
        } catch (err) {
            console.log('Error signing in with google: ', err.message)
            dispatch({
                type: 'SIGNINWITHGOOGLE',
                payload: {
                    message: err.message,
                    location: 'signinwithgoogle'
                }
            })
        }
    }
}

export const doSignout = () => {
    return async (dispatch: Dispatch) => {

        await auth.signOut()
        dispatch({
            type: 'SIGNOUT',
            payload: null
        })

    }
}