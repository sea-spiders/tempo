import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './deckCard.module.css';
import globalStyles from '../../global/globalStyles.module.css'

const DeckCard = ({ deckDetails }) => {
  return (
    <>
      <div>
        <Link to='/deck-page' state={{ deckId: deckDetails._id }}>
          <div className={`${globalStyles.cardBackgroundGrey}`}>
            <div className={`${globalStyles.cardTitle}`}>{deckDetails.title}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DeckCard;