import React from 'react'
import './card.css'

const SubThread = ({heading}) => {
  return (
    <div className='sub-thread'>
        <div className='bg-layer'>
            <p>{heading}</p>
        </div>
        <input type="text" placeholder='Enter text here' id="" />
    </div>
  )
}

export default SubThread