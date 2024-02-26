import React, { useState, useEffect } from 'react'
import classes from '../modules/Advice.module.scss'
import Dice from '../assets/images/icon-dice.svg'
import Divide from '../assets/images//pattern-divider-desktop.svg'

export default function Advice() {
    const [advice, setAdvice] = useState('')
    useEffect(() => {
        getNewAdvice()

    }, [])

    const getNewAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                const newAdvice = data.slip.advice;
                setAdvice(newAdvice)
            })
            .catch(err => console.error(err));
    }
  return (
    <div className={classes['advice-wrapper']}>
        <h2>Advice #{advice.id}</h2>
        <h1>{advice}</h1>
        <img className={classes['divide']} src={Divide} alt="" /> <br />
        <button onClick={getNewAdvice}><img src={Dice} alt="dice" /></button>
    </div>
  )
}
