import './SignInAndUpPage.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp';

const SignInAndUpPage = () => {
    return (
        <div className="sign-in-and-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndUpPage;
