import './CustomButton.scss'

interface SignInProps {
    children: any;
    type?: "submit";
    onClick?: () => void;
}

const CustomButton = ({ children, ...otherProps }: SignInProps) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
