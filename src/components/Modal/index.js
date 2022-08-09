import React from 'react'
import "./modal.css"

export default function Modal({ title, children, onClose }) {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__title'>
          <h3>{title}</h3>
          <button className='modal--button' onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  )
}
