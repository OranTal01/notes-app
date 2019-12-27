import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => {
    return (
        <button
            className={
                `${inverted ? "inverted" : ''}
                custom-button`}
            { ...otherButtonProps }>
            { children }
        </button>
    );
};

export default CustomButton;