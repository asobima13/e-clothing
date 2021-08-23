import './SignUp.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useActions } from '../../store/hooks' 
import React, { useState } from 'react';

type UserState = {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUp = () => {
    const [userState, setUserState] = useState<UserState>({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userState;
    const { doSignup } = useActions();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const resetState = () => {
            setUserState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }

        doSignup(userState, resetState)
        // setUserState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // })

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUserState({
            ...userState, [name]: value
        })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} handleChange={handleChange} label='Display Name' required />
                <FormInput type='email' name='email' value={email} handleChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} handleChange={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;
