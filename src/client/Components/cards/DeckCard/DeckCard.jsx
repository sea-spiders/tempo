import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './deckcard.module.css';

const Deck = ({ deckDetails }) => {
  console.log(deckDetails)
  return (
    <>
      <div id={styles.deck}>
        <Link to={`/deckpage/${deckDetails._id}`} >
          <div className={`${styles.backgroundGrey}`}>
            <div className={`${styles.title}`}>{deckDetails.title}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Deck;