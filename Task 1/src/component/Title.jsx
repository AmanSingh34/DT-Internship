import React from 'react'
import './card.css'

const Title = ({title,children}) => {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <div className='sub-box'>
            {children}
        </div>
    </div>
  )
}

export default Title