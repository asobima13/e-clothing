import './CustomButton.scss'

interface SignInProps {
    children: any;
    isGoogleSignIn?: boolean;
    type: "submit" | "button";
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
