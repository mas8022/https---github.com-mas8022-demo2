import React from 'react'
import './IsExistProduct.css'
import './IsExistProduct-medi.css'

export default function IsExistProduct({text}) {
  return (
    <div className='isExistProduct'>
        <div className="textDiv">
            <p>{text}</p>
        </div>
    </div>
  )
}
