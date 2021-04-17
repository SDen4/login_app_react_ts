import React, { useState } from 'react';
import axios from 'axios';

import styles from './Login.module.css';

const Login: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const emailChangeHandler = (event: any) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };

  const passwordChangeHandler = (event: any) => {
    event.preventDefault();
    setPasswordValue(event.target.value);
    console.log(passwordValue);
  };

  const registrHandler = async () => {
    const authData = {
      email: emailValue,
      password: passwordValue,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7qlRU6UjFDCiXBWJkGPxDbfkvGv8MauI',
        authData,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async () => {
    const authData = {
      email: emailValue,
      password: passwordValue,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7qlRU6UjFDCiXBWJkGPxDbfkvGv8MauI',
        authData,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitHandler');
  };

  return (
    <div className={styles.component}>
      <div className={styles.window}>
        <h2>Authorisation</h2>

        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formUnit}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={styles.formUnit}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={styles.btnsWrapper}>
            <button type="button" onClick={registrHandler}>
              Registration
            </button>
            <button type="submit" onClick={loginHandler}>
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
