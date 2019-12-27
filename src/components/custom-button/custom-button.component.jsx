import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, customButton, logout, inverted, ...otherButtonProps }) => {
    return (
        <button
            className={
                `${logout ? "logout" : ''}
                ${inverted ? "inverted" : ''}
                ${customButton ? "custom-button" : ''}` }
            { ...otherButtonProps }>
            { children }
        </button>
    );
};

export default CustomButton;