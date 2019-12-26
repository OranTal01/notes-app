import React from 'react';
import { Link } from "react-router-dom";
import './header.style.scss';

const Header = () => {
    return (
        <div>
            <Link to='/notes'>Notes</Link>
            <Link to='/add-note'>Add Note</Link>
        </div>
    );
};

export default Header;