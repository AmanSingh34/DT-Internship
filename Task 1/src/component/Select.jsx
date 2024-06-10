import React from 'react'
import './card.css'

const Select = ({val}) => {
  return (
    <div className='select'>
        <select name="" id="">
            <option value="Select catag">{val}</option>
        </select>
    </div>
  )
}

export default Select