import React from 'react'
// import LuckyN from './LuckyN'
import Dice from './Dice'
import { getTirades, sum } from './utils'
import LuckyN from './LuckyN'


export const App = () => {
  return (
<>
    {/* <LuckyN /> */}
    <LuckyN numDaus={2} suma={2} />
</>
  )
}

export default App

