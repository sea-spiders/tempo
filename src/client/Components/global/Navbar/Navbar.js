import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import { v4 as uuid } from 'uuid';
import UserProfile from './UserProfile';

const Navbar = ({ leftItems }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={`${styles.row}`}>
          {Object.entries(leftItems).map((e) => {
            const [title, url] = e;
            return (
              <div className={styles.margin} key={uuid()}>
                <Link to={url}>{title}</Link>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.margin}>
            {/* {email ? ( */}
            <a href='http://localhost:8080/auth/logout'>logout</a>
            {/* ) : ( */}
            {/* <a href={`http://localhost:8080/auth/google`}>log in</a> */}
            {/* )} */}
          </div>
        </div>
      </div>

      <UserProfile />
    </>
  );
};

export default Navbar;
