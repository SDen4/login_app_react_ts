import React from 'react';

import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <div className={styles.component}>
      <div className={styles.titleWrapper}>
        <h1>lOGIN App</h1>
      </div>
      <div className={styles.btnsWrapper}>
        <button type="button">Page1</button>
        <button type="button">Page2</button>
      </div>
    </div>
  );
};

export default Nav;
