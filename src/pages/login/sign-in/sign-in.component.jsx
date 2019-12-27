import React from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../../firebase/firebase-google';
import { connect } from 'react-redux';
import './sign-in.style.scss';



const SignIn = ({ currentUser, history }) => {
    const handelSubmit = (e) => {
        e.preventDefault()
        if (currentUser) {
            history.push('/notes')
        }
    }
    return (
        <div className="container">
            <h4>sign in with email and password</h4>
            {/* { this.state.error && <p className="error">{ this.state.error }</p> } */ }
            <form
                onSubmit={ handelSubmit }>
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                />
                <div className="button">
                    <CustomButton customButton>
                        Sign In
                    </CustomButton>
                    <CustomButton
                        customButton
                        onClick={ signInWithGoogle }>
                        Sign In With Goggle
                    </CustomButton>
                    <CustomButton customButton>
                        <Link to='/sign-up'>
                            Sign Up
                        </Link>
                    </CustomButton>
                </div>
            </form>
        </div>

    );
};
const mapStateToProps = (state) => ({
    currentUser: state.user
})
export default connect(mapStateToProps)(SignIn)