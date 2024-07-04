//Parent: Content.tsx

import React from 'react';
import './style-signupForm.css';

import { CredentialsType } from '../../page/banner/Banner.tsx';
import { CircleXIcon } from 'lucide-react';

type SignUpFormPropType = {
  credentials?: CredentialsType;
  isSignUpOpen: boolean;
  setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCredentials: React.Dispatch<
    React.SetStateAction<{
      username: undefined;
      email: undefined;
      password: undefined;
    }>
  >;
};

function SignUpForm({
  // credentials,
  setCredentials,
  setIsSignUpOpen,
  isSignUpOpen,
  setIsVideoOpen,
}: SignUpFormPropType) {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function submitFormHandler() {
    //write here code to verify the password confirmation and validation
    //dispatch the signup actions

    console.log('a Sign-up form was submitted succesfully');

    setIsSignUpOpen(false);
    setIsVideoOpen(false);
  }

  function handleCloseForm() {
    setIsSignUpOpen(false);
    setIsVideoOpen(false);
  }

  return (
    <>
      <div className='form__wrapper'>
        

        <form className={`signupForm ${isSignUpOpen ? 'active' : ''}`}>
          <a href='' onClick={handleCloseForm} className='closeForm'>
            <CircleXIcon className='closeIcon' />
          </a>

          <h2 className='signupForm__title'>Ready to Join Us</h2>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={inputHandler}
          ></input>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={inputHandler}
          ></input>
          <input
            type='password'
            placeholder='Create Password'
            name='password'
            onChange={inputHandler}
          />

          <input
            type='password'
            placeholder='Confirm Password'
            name='password'
            onChange={inputHandler}
          ></input>
          <button className='form__btn' onClick={submitFormHandler}>
            Sign Up
          </button>

          <p className='signupform__account'>
            Already have an account?{' '}
            <span>
              <a href='#'>Sign in</a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
