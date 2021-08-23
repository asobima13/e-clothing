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
                type: 'SIGNUP'
            })
        } catch (err) {
            console.log('Error registering new user: ', err.message)
        }

    }
}

export const doSignin = (form: SigninForm, cb: () => void) => {
    return async (dispatch: Dispatch) => {

        try {
            const { email, password } = form;
            await auth.signInWithEmailAndPassword(email, password);
            cb()
            dispatch({
                type: 'SIGNIN'
            })
        } catch (err) {
            console.log('Error signing in: ', err.message)
        }

    }
}

export const doSigninWithGoogle = (cb: () => void) => {
    return async (dispatch: Dispatch) => {

        try {
            await signInWithGoogle();
            cb()
            dispatch({
                type: 'SIGNINWITHGOOGLE'
            })
        } catch (err) {
            console.log('Error signing in with google: ', err.message)
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