import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Flashcard from '../../cards/Flashcard/Flashcard';
import styles from './deckPage.module.css';

const DeckPage = () => {

  //useLocation allows us to access state passed through the Link process of react-router-dom
  const location = useLocation();
  //Destructure the variables in location.state
  const { deckId } = location.state;

  const [flashcardsArr, setflashcardsArr] = useState([]);

  useEffect(() => {
    console.log('inside axios')
    axios.get(`/api/getCardsInDeck/${deckId}`).then(({ data }) => setflashcardsArr(data))
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