import React from 'react'
import './card.css'
import left from '../assets/arrow-left.png'
import right from '../assets/arrow-right.png'
import expand from '../assets/expand.png'
import dots from '../assets/dots.png'

const Contents = () => {
  return (
    <>
    <div className='contents'>
       <div className='contents-1'>
       <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
        <span>Tools</span>
        <span>Help</span>
       </div>
    
    <div className='contents-2'>
        <div><img src={left} alt="" /></div>
        <div><img src={right} alt="" /></div>
        <div><img src={expand} alt="" /></div>
        <div><span>Paragraph</span></div>
        <div><img id='dots' src={dots} alt="" /></div>
    </div>
    <div className='contents-3'></div>
    </div>
    </>
  )
}

export default Contents