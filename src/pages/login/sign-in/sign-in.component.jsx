import React, { Component } from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../../firebase/firebase-google';
import './sign-in.style.scss';
import { auth } from '../../../firebase/firebase';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        error: ''
    }

    handelSubmit = async (e) => {
        const { email, password } = this.state;
        const { history } = this.props
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/notes')
            this.setState(() => ({
                email: '',
                password: '',
                error: ''
            }))
        } catch (error) {
            this.setState(() => ({ error: error.message }))
            console.log(error.message)
        }
    }

    handelChange = (e) => {
        const { value, name } = e.target;
        this.setState(() => ({ [name]: value }));
    }

    render() {
        const { email, password, error } = this.state
        return (
            <div className="container">
                <h4>sign in with email and password</h4>
                { error && <p className="error">{ error }</p> }
                <form
                    onSubmit={ this.handelSubmit }>
                    <FormInput
                        onChange={ this.handelChange }
                        value={ email }
                        autoComplete="username"
                        type="email"
                        name="email"
                        label="Email"
                    />
                    <FormInput
                        onChange={ this.handelChange }
                        value={ password }
                        autoComplete="current-password"
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
    }
};

export default SignIn;