import './SignIn.scss'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

type Form = {
    email: string,
    password: string
}

const SignIn = () => {
    const [form, setForm] = useState<Form>({
        email: '',
        password: ''
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(form.email, form.password);
            setForm({ email: '', password: '' })
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setForm({
            ...form, [name]: value
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={form.email} handleChange={handleChange} label="email" required/>
                <FormInput name="password" type="password" value={form.password} handleChange={handleChange} label="password" required/>
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In with Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
