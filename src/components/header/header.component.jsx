import React from 'react';
import { Link } from "react-router-dom";
import './header.style.scss';

const Header = () => {

    return (
        <div className='header'>
            <div className="container">
                <Link
                    className="header__link"
                    to='/notes'>
                    <h1 className="header__title">Notes App</h1>
                </Link>
                <h2 className="header__subtitle">Take notes and never forget</h2>
            </div>
        </div>
    );
};

export default Header;