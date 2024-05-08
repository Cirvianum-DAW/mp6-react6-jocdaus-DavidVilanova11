import React from 'react'
import './Dau.css'

const Dau = ({ valor }) => {
  return (
    <div className={`Dau Dau--${valor}`} >{`${valor}`}</div>
  )
}

export default Dau