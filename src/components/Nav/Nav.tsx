import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <div className={styles.component}>
      <div className={styles.titleWrapper}>
        <h1>lOGIN App</h1>
      </div>
      <div className={styles.btnsWrapper}>
        <div className={styles.button}>
          <NavLink to="/" exact>
            Main Page
          </NavLink>
        </div>
        <div className={styles.button}>
          <NavLink to="/page2">Page2</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
