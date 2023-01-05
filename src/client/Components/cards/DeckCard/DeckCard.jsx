import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './deckCard.module.css';

const DeckCard = ({ deckDetails }) => {
  console.log(deckDetails._id)
  return (
    <>
      <div>
        <Link to='/deck-page' state={{ deckId: deckDetails._id }}>
          <div className={`${styles.backgroundGrey}`}>
            <div className={`${styles.title}`}>{deckDetails.title}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DeckCard;