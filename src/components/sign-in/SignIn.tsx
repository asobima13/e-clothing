import './SignIn.scss'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { useActions } from '../../store/hooks'
import { useHistory } from 'react-router-dom'

type Form = {
    email: string,
    password: string
}

const SignIn = () => {
    const [form, setForm] = useState<Form>({
        email: '',
        password: ''
    });

    const { doSignin, doSigninWithGoogle } = useActions();
    const history = useHistory();

    const pushPage = () => {
        history.push("/")
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        doSignin(form, pushPage)
    }

    const handleSigninWithGoogle = () => {
        doSigninWithGoogle(pushPage)
        setForm({ email: '', password: ''})
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
                    <CustomButton type="button" onClick={handleSigninWithGoogle} isGoogleSignIn>{' '}Sign In with Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
