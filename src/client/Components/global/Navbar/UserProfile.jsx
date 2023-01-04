import React from 'react';
import { useSelector } from 'react-redux';
import styles from './userProfile.module.css'

const UserProfile = () => {

  const userEmail = useSelector((state) => state.user.email);
  const userPicture = useSelector((state) => state.user.picture);

  return (
    <>
      <div className={styles.userProfileContainer}>
        <span className={styles.userEmail}>Welcome, {userEmail}</span>
        <img src={userPicture} alt="User" className={styles.userPicture} />
      </div>
    </>
  );
};

export default UserProfile;
