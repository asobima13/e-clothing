import './CustomButton.scss'

interface SignInProps {
    children: any;
    isGoogleSignIn?: boolean;
    inverted?: boolean;
    type: "submit" | "button";
    onClick?: () => void;
}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }: SignInProps) => {
    return (
        <button className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
