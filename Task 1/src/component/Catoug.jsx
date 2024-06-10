import React from 'react'
import bulb from '../assets/Bulb.png'
import quest from '../assets/quest.png'
import chat from '../assets/chat.png'
import light from '../assets/light.png'
import './card.css'

const Catoug = () => {
  return (
    <div className='catoug'>
        <img src={bulb} alt="" />
        <img src={chat} alt="" />
        <img src={quest} alt="" />
        <img src={light} alt="" />
    </div>
  )
}

export default Catoug