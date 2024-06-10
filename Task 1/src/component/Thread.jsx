import React from 'react'
import './card.css'
import arrow from '../assets/upload.png'

const Thread = () => {
  return (
    <div className='thread'>
        <div className='content'>
        <img src={arrow} alt="" />
        <h2>Thread</h2>
        </div>
    </div>
  )
}

export default Thread