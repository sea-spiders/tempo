import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import globalStyles from '../../global/globalStyles.module.css'
import styles from './Flashcard.module.css';

const Card = ({ data }) => {
  const { back, difficulty, front, hints, scheduled, title, user_id, _id } =
    data;
    const navigate = useNavigate();
  return (
    <>
      
        <Link to={`/flashcard/${_id}`} >
          <div className={`${globalStyles.cardBackgroundGrey}`}>
            <div className={`${globalStyles.cardTitle}`}>{title ?? 'no title'}</div>
            <div className={`${globalStyles.cardFront}`}>{front ?? 'no front'}</div>
          </div>
        </Link>
    </>
  );
};

export default Card;
