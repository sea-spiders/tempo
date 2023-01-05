import React from 'react';
import styles from './userProfile.module.css';

const UserProfile = () => {
  return (
    <>
      <div className={styles.userProfileContainer}>
        <span className={styles.userEmail}>Welcome, PLACE USERNAME HERE</span>
        {/* <img src={userPicture} alt="User" className={styles.userPicture} /> */}
      </div>
    </>
  );
};

export default UserProfile;
