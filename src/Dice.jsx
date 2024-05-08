import React from 'react';
import './Dice.css';
import Dau from './Dau';

// Li passarem un array de valors de daus [3, 4] --> Dos daus

// M'he d'assegurar de que es mostrin tants daus com es passin

const Dice = ({ dice }) => {
  return <div className="Dice">
    {dice.map((value, i) => (
        <Dau key={i} valor={value} />
    ) )}
  </div>;
};

export default Dice;
