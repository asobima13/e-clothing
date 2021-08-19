import './CustomButton.scss'

interface SignInProps {
    children: any;
    isGoogleSignIn?: any;
    type?: "submit";
    onClick?: () => void;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: SignInProps) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
