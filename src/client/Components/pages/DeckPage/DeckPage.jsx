import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Flashcard from '../../cards/Flashcard/Flashcard';
import styles from './deckPage.module.css';
import globalStyles from '../../global/globalStyles.module.css'

const DeckPage = () => {

  const navigate = useNavigate();

  //useLocation allows us to access state passed through the Link process of react-router-dom
  const location = useLocation();
  //Destructure the variables in location.state
  const { deckId } = location.state;

  const [flashcardsArr, setflashcardsArr] = useState([]);

  function deleteDeck() {
    fetch(`/api/deck/${deckId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(() => {
        navigate('/home');
      })
      .catch(e => console.log('ERROR:', e))
  }

  useEffect(() => {
    axios.get(`/api/getCardsInDeck/${deckId}`).then(({ data }) => setflashcardsArr(data))
  }, []);

  return (
    <>
      <div id={globalStyles.createNewBtn}>
        <Link to='/createCard' state={{ deckId }}>
          Create New Card <strong>+</strong>
        </Link>
      </div>
      <div id={globalStyles.createNewBtn} onClick={deleteDeck}>
        Delete Deck <strong>+</strong>
      </div>
      <div id={globalStyles.cardsContainer}>
        {flashcardsArr.map((flashcard) => (
          <Flashcard data={flashcard} key={uuid()} />
        ))}
      </div>
    </>
  );
};

export default DeckPage;