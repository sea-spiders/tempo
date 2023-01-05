import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateCard.module.css';
import globalStyles from '../../global/globalStyles.module.css'

const CreateCard = () => {
  const [front, setFront] = useState('');
  const [back, setback] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  function cb() {
    fetch('8080/api/cards', {
      method: 'POST',
      body: JSON.stringify({ front, back, title }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => navigate('/home')).catch(e => console.log('ERROR:', e))
  }

  return (
    <>
      <div id={globalStyles.inputsContainer}>
        <input
          id={styles.cardTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Card Title Here'
        ></input>
        <input
          id={globalStyles.inputBoxes}
          onChange={(e) => setFront(e.target.value)}
          placeholder='Enter Question Here'
        ></input>
        <input
          id={globalStyles.inputBoxes}
          onChange={(e) => setback(e.target.value)}
          placeholder='Enter Answer Here'
        ></input>
        <button id={globalStyles.addBtn} onClick={cb}>
          Add Card <span>&#43;</span>
        </button>
      </div>
    </>
  );
};

export default CreateCard;
