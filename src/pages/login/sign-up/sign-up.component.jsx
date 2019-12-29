import React, { Component } from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import { auth } from '../../../firebase/firebase';
import { createUserProfileDocument } from '../../../firebase/firebase-create-user.js';
import './sign-up.style.scss'


class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    };

    handelChange = (e) => {
        const { value, name } = e.target
        this.setState(() => ({ [name]: value }))
    }

    handelOnSubmit = async (e) => {
        const { displayName, email, password, confirmPassword } = this.state
        const { history } = this.props

        e.preventDefault();

        if (password !== confirmPassword) {
            this.setState(() => ({
                error: 'Password don\'t match, Password should be 6 characters'
            }))
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: ''
            });
            history.push('/notes')
        } catch (error) {
            this.setState(() => ({ error: error.message }))
            console.error(error)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword, error } = this.state
        return (
            <div className="container" >
                <h4 className="title">I don't have a account</h4>
                <span>Sign up with your email and password</span>
                { error && <p className="error">{ error }</p> }
                <form
                    onSubmit={ this.handelOnSubmit }
                    className="sign-up-form" >
                    <FormInput
                        onChange={ this.handelChange }
                        autoComplete="username"
                        label="User Name"
                        type="text"
                        name="displayName"
                        value={ displayName }
                    />
                    <FormInput
                        onChange={ this.handelChange }
                        autoComplete="username"
                        label="Email"
                        type="email"
                        name="email"
                        value={ email }
                    />
                    <FormInput
                        onChange={ this.handelChange }
                        autoComplete="current-password"
                        label="Password"
                        type="password"
                        name="password"
                        value={ password }
                    />
                    <FormInput
                        onChange={ this.handelChange }
                        autoComplete="current-password"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={ confirmPassword }
                    />
                    <CustomButton
                        type="submit"
                        customButton>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
};

export default SignUp;