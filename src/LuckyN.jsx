import React from 'react';
import Dice from './Dice';

function LuckyN({ targetSum }) {
  // Lògica del joc
  // Aquí podríem afegir més lògica com gestionar les tirades, comprovar la suma, etc.
  return (
    <div className="LuckyN">
      <Dice />
    </div>
  );
}

export default LuckyN;
