import { useState } from 'react'
import classes from './modules/App.module.scss'
import Advice from './components/Advice'

function App() {

  return (
    <div className={classes['main-wrapper']}>
      <Advice />
    </div>
  )
}

export default App
