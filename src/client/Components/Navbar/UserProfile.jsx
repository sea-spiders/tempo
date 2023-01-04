import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import styles from './userProfile.module.css'

const UserProfile = ({ leftItems }) => {

  const userEmail = useSelector((state) => state.user.email);
  const userPicture = useSelector((state) => state.user.picture);

  return (
    <>
      <div className={styles.userProfileContainer}>
        <span className={styles.userEmail}>{userEmail}</span>
        <img src={userPicture} alt="User" className={styles.userPicture} />
      </div>
    </>
  );
};

export default UserProfile;
