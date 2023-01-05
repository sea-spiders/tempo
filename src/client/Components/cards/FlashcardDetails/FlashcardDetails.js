import axios from 'axios';
import React, { useState } from 'react';
import styles from './flashcardDetails.module.css';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { json, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FlashCard = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState({});
  const [nextCard, setnextCard] = useState({});
  const [showFront, setShowFront] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `/api/cards/${id}`,
    }).then((res) => {
      setCardData(res.data);
    });
  }, []);

  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `/api/cards/nextCard/${id}`,
    }).then((res) => {
      setnextCard(res.data);
    });
  }, []);

  const deleteCard = () => {
    const response = axios({
      method: 'delete',
      withCredentials: true,
      url: `/api/cards/${id}`,
    }).then((res) => {
      window.location.href = `/home`;
    });
  };

  return (
    <>
      <div className="container d-flex justify-content-center text-center">
        <div className="col">
          <div id="card-title-wrapper" className={`${styles.containerbox}`}>
            <h1 className={`${styles.title}`}>
              {cardData.title ?? ' No Title'}
            </h1>
          </div>

          <div
            id="card-frontCard"
            onClick={() => setShowFront(!showFront)}
            className={`${styles.containerbox2}`}
          >
            <p className={`${styles.paragraph}`}>
              {showFront ? cardData.front : cardData.back}
            </p>
          </div>
          <div className={styles.spaceBetween}>
            <button
              onClick={() => deleteCard()}
              className={`${styles.addCardBtn}`}
            >
              DELETE CARD
            </button>
            <button
              onClick={() => (window.location.href = `/flashcard/${nextCard}`)}
              className={`${styles.addCardBtn}`}
            >
              NEXT CARD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
