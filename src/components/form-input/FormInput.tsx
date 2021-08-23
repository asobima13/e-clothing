import React from 'react';
import './FormInput.scss'

interface FormInputProps {
    name: string;
    type: string;
    required: boolean;
    value: string;
    label?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ value, label, handleChange, ...otherProps}: FormInputProps) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? (
                    <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}>{label}</label>
                ) :
                null
            }
        </div>
    );
}

export default FormInput;
