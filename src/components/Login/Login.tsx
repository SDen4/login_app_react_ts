import React from 'react';

import styles from './Login.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.component}>
      <div className={styles.window}>
        <form className={styles.form}>
          <div className={styles.formUnit}>
            <label>E-mail</label>
            <input type="email" />
          </div>
          <div className={styles.formUnit}>
            <label>Password</label>
            <input type="password" />
          </div>
          <div className={styles.btnsWrapper}>
            <button type="button">Registration</button>
            <button type="submit">Enter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
