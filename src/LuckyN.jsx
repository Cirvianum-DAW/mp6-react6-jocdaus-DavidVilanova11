import React, { useState } from 'react'
import Dice from './Dice'
import { getTirades, sum } from './utils'


const LuckyN = ({ numDaus }) => {

  const [dice, setDice] = useState(getTirades(numDaus));

    const [guess, setGuess] = useState(1);

  const handleClick = () => {
    setDice(getTirades(numDaus));
  }

  const handleGuessChange = (event) => {
    setGuess(parseInt(event.target.value));
  }

    const isWinner = sum(dice) === guess;
    return (
      <main>
        <h1 className='mt-3 text-center text-xl text-blue-500'>
          Prova Sort! La suma ha de ser {guess}
        </h1>
        <label for="guestInput">Número a encentrar:</label>
        <input id="guestInput" type="number" value={guess} onChange={handleGuessChange} />
        
        <Dice dice={dice} />
        {isWinner ? (
          <h2 className='text-center text-2xl text-green-500'>HAS GUANYAT!</h2>
        ) : null}
        <button
          className='block mx-auto mt-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          onClick={() => setDice(getTirades(numDaus))}
        >
          Tira els daus
        </button>
      </main>
    );
    

}

export default LuckyN