import React from 'react'
import './card.css'
import upload from '../assets/upload.png'

const Methods = ({heading,subhead}) => {
  return (
    <div className='intro-container'>
        <div className='intro-head'>
            <img src={upload} alt="" />
            <h3>{heading}</h3>
        </div>
        <div className='intro-subhead'>
            <p>{subhead}</p>
        </div>
        <div className='seemore'>
            <p>See More</p>
        </div>
    </div>
  )
}

export default Methods