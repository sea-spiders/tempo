import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './createDeck.module.css';
import globalStyles from '../../global/globalStyles.module.css'


const CreateDeck = () => {
  const [deckTitle, setdeckTitle] = useState('');
  const navigate = useNavigate();

  function addDeckToDB() {
    fetch('/api/deck', {
      method: 'POST',
      body: JSON.stringify({ title: deckTitle }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        res = res.json()
          .then((res) => {
            navigate('/deck-page', { state: { deckId: res._id } })
          })

      })
      .catch(e => console.log('ERROR:', e))
  }

  return (
    <>
      <div id={globalStyles.inputsContainer}>
        <input
          id={globalStyles.inputBoxes}
          onChange={(e) => setdeckTitle(e.target.value)}
          placeholder='Enter Deck Name Here'
        ></input>
        <button id={globalStyles.addBtn} onClick={addDeckToDB}>
          Add Deck <span>&#43;</span>
        </button>
      </div>
    </>
  );
};

export default CreateDeck;
