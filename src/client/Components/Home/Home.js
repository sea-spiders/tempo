import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { v4 as uuid } from 'uuid';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [arrCards, setArrCards] = useState([]);

  useEffect(() => {
    axios.get('/api/getAllCards').then(res => setArrCards(res.data));
  }, []);

  return (
    <>
      <div id={styles.createNewCard}>
        <Link to='/createCard'>
          Create New Card <strong>+</strong>
        </Link>
      </div>
      <div id={styles.cardsContainer}>
        {arrCards.map((card) => (
          <Card data={card} key={uuid()} />
        ))}
      </div>
    </>
  );
};

export default Home;
