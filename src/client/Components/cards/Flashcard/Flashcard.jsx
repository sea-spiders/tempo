import React from 'react';
import styles from './flashcard.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { back, difficulty, front, hints, scheduled, title, user_id, _id } =
    data;
  const navigate = useNavigate();
  return (
    <>
      <Link to={`/flashcard/${_id}`}>
        <div className={`${styles.backgroundGrey}`}>
          <div className={`${styles.title}`}>{title ?? 'no title'}</div>
          <div className={`${styles.front}`}>{front ?? 'no front'}</div>
        </div>
      </Link>
    </>
  );
};

export default Card;
