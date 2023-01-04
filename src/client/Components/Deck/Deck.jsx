import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import styles from './home.module.css';

const Deck = ({ deckDeatils }) => {
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    axios.get(`/api/getCardsInDeck/${deckDetails.id}`).then(res => cardsArr(res.data));
  }, []);

  return (
    <>
      <div id={styles.createNewCard}>
        <Link to='/createCard'>
          Create New Card <strong>+</strong>
        </Link>
      </div>
      <div id={styles.cardsContainer}>
        {cardsArr.map((card) => (
          <Card data={card} key={uuid()} />
        ))}
      </div>
    </>
  );
};

export default Deck;