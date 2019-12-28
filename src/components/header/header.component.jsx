import React from 'react';
import { Link } from "react-router-dom";
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import './header.style.scss';


const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <div className="container">
                <div>
                    <Link
                        className="header__link"
                        to='/notes'>
                        <h1 className="header__title">Notes App</h1>
                    </Link>
                    <h2 className="header__subtitle">Take notes and never forget</h2>
                </div>
                <div>
                    { currentUser ? <CustomButton
                        onClick={ () => auth.signOut() }
                        logout>
                        <Link to='/'>
                            Logout
                    </Link>
                    </CustomButton> : null }
                    { currentUser ? <p>{ `Welcome back: ${currentUser.displayName}` }</p> : null }
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);