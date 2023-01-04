import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './decksContainer.module.css';

const DecksContainer = () => {
  const [decksArr, setDecksArr] = useState([]);

  useEffect(() => {
    axios.get('/api/getAllDecks').then(res => setDecksArr(res.data));
  }, []);

  return (
    <>
      <div id={styles.decksContainer}>
        {decksArr.map((deck) => (
          <Deck deckDetails={deck} key={uuid()} />
        ))}
      </div>
      <div id={styles.createNewDeckBtn}>
        <Link to='/createDeck'>
          Create New Deck <strong>+</strong>
        </Link>
      </div>
    </>
  );
};

export default DecksContainer;
