import React from 'react';
import './style-signupForm.css'

function SignUpForm({ credentials, setCredentials, setIsSignUpOpen, isSignUpOpen }) {
  
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function submitFormHandler() {
    //where and when to verify the password confirmation
    //dispatch the signup actions

    console.log('a Sign-up form was submitted succesfully');
    setIsSignUpOpen(false);
  }

  return (
    <>
    <div className="form__wrapper">
      <form
      className={`signupForm ${isSignUpOpen? 'active' : ''}`}
      
      >
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
