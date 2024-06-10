import React from 'react'
import './card.css'
import info from '../assets/info.png'
import iframe from '../assets/iframe.png'

const Card = ({desc,heading,center}) => {
  return (
    <div className='card'>
        <div className='head'>
           <div className='head-contents'> 
              <h3>{heading}</h3>
              <img src={info} alt="" />
           </div>
        </div>
        <div className='sub-head'>
          <p>
            <span>Description:</span> {desc}
          </p>
        </div>

        <div className='center'>
          {center}
        </div>
        
    </div>
  )
}

export default Card