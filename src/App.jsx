import React from 'react'
// import LuckyN from './LuckyN'
import Dice from './Dice'
import { getTirades, sum } from './utils'


export const App = () => {
    const prova = [3, 4]
  return (
<>
    {/* <LuckyN /> */}
    <Dice dice={prova} />
</>
  )
}

export default App

