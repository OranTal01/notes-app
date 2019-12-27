import React from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import './sign-in.style.scss';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="container">
            <h4>sign in with email and password</h4>
            {/* { this.state.error && <p className="error">{ this.state.error }</p> } */ }
            <form>
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
                    <CustomButton>
                        Sign In
                    </CustomButton>
                    <CustomButton>
                        Sign In With Goggle
                    </CustomButton>
                    <CustomButton>
                        <Link to='/sign-up'>
                            Sign Up
                        </Link>
                    </CustomButton>
                </div>
            </form>
        </div>

    );
};

export default SignIn