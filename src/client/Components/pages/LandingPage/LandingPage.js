import React from 'react';
import landingPageImage from './animation.png';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
    <div className='mt-5'></div>
      <div className="container d-flex justify-content-center text-center vertical-center ">
        <div className="row align-items-center">
          <div id={styles.divContainer} className="col align-items-center">
            <div className={styles.width500}>
              "Learning is the key to unlocking your full potential and
              achieving greatness."
            </div>
            <div>
              <img id={styles.landingImage} src={landingPageImage} />
            </div>
          </div>
          <a
            className="col align-items-center"
            id={styles.LandingPageLogin}
            href={`http://localhost:8080/auth/google`}
          >
            log in
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
