import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Flashcard from '../../cards/Flashcard/Flashcard';
import styles from './deckPage.module.css';

const DeckPage = () => {
  const [flashcardsArr, setflashcardsArr] = useState([]);

  useEffect(() => {
    axios.get('/api/getAllCardsInDeck').then(({ data }) => setflashcardsArr(data))
  }, []);

  return (
    <>
      <div id={styles.createNewCard}>
        <Link to='/createCard'>
          Create New Card <strong>+</strong>
        </Link>
      </div>
      <div id={styles.cardsContainer}>
        {flashcardsArr.map((flashcard) => (
          <Flashcard data={flashcard} key={uuid()} />
        ))}
      </div>
    </>
  );
};

export default DeckPage;