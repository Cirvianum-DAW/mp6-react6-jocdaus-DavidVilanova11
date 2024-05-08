import React from 'react';
import Dau from './Dau';

function Dice() {
  // Número de daus a mostrar
  const numDice = 3;

  return (
    <div className="Dice">
      {[...Array(numDice)].map((_, index) => (
        <Dau key={index} />
      ))}
    </div>
  );
}

export default Dice;
