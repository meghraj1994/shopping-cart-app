import React from 'react';

import CustomButton from '../custom-button/custom-button-component';
import FormInput from '../form-input/form-input-component';
import './sign-in-style.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  //when submitting the form we are preventing the defaul behaviour of submit button
  // to have full control over this button
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      //when user is logged in clear the current state
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert('invalid credentials');
      console.error(error);
    }
  };

  //when user is changing the value we are just setting value into name
  //ie name(email) : and its value
  // name(password) : its value
  handleChange = (event) => {
    //name(password) : and its entered value
    //name(email) : its entered value
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account</h1>
        <span>Sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton
              type="button "
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
