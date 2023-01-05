import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './deckCard.module.css';

const Deck = ({ deckDetails }) => {
  return (
    <>
      <div>
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