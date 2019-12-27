import React from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import './sign-up.style.scss'

const SignUp = () => {
    return (
        <div className="sign-up">
            <h4 className="title">I don't have a account</h4>
            <span>Sign up with your email and password</span>
            {/* { error && <p className="error">{ error }</p> } */ }
            <form
                className="sign-up-form">
                <FormInput
                    label="User Name"
                    type="text"
                    name="userName"
                    // value={ displayName }
                    required
                />
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    // value={ email }
                    required
                />
                <FormInput
                    autoComplete="off"
                    label="Password"
                    type="password"
                    name="password"
                    // value={ password }
                    required
                />
                <FormInput
                    autoComplete="off"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    // value={ confirmPassword }
                    required
                />
                <CustomButton
                    type="submit">
                    Sign Up
            </CustomButton>
            </form>
        </div>
    );
};

export default SignUp;