import React from 'react';

import styles from './Login.module.css';

const Login: React.FC = () => {
  const registrHandler = () => {
    console.log('registrHandler');
  };
  const loginHandler = () => {
    console.log('loginHandler');
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
            <input type="email" id="email" />
          </div>
          <div className={styles.formUnit}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
