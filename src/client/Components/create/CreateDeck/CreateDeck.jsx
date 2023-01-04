import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './createDeck.module.css';

const CreateDeck = () => {
  const [deckName, setDeckName] = useState('');
  const navigate = useNavigate();

  function addDeckToDB() {
    fetch('/api/deck', {
      method: 'POST',
      body: JSON.stringify({ deckName }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => navigate('/createDeck')).catch(e => console.log('ERROR:', e))
  }

  return (
    <>
      <div id={styles.deckInputContainer}>
        <input
          id={styles.deckNameInput}
          onChange={(e) => setDeckName(e.target.value)}
          placeholder='Enter Deck Name Here'
        ></input>
        <button id={styles.addDeckBtn} onClick={addDeckToDB}>
          Add Deck <span>&#43;</span>
        </button>
      </div>
    </>
  );
};

export default CreateDeck;
