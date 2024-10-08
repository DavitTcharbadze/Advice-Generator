import React, { useState, useEffect } from 'react';
import classes from '../modules/Advice.module.scss';
import Dice from '../assets/images/icon-dice.svg';
import Divide from '../assets/images/pattern-divider-desktop.svg';

export default function Advice() {
  const [adviceId, setAdviceId] = useState(null);
  const [adviceText, setAdviceText] = useState('');

  useEffect(() => {
    getNewAdvice();
  }, []);

  const getNewAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const newAdviceId = data.slip.id;
        const newAdviceText = data.slip.advice;
        setAdviceId(newAdviceId);
        setAdviceText(newAdviceText);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={classes['advice-wrapper']}>
      <div className={classes['advice-box']}>
        <div className={classes['title']}>
          <h2>Advice #{adviceId}</h2>
        </div>
        <div className={classes['advice']}>
          <h1>{adviceText}</h1>
        </div>
        
      <div className={classes['img']}>
        <img className={classes['divide']} src={Divide} alt="" /> <br />
      </div>
        <div className={classes['button']}>
          <button onClick={getNewAdvice}>
            <img src={Dice} alt="dice" />
          </button>
        </div>
      </div>
    </div>
  );
}
