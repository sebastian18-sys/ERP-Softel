import React from 'react'
import "./buttonAdd.scss"
import { MdAddCircleOutline } from 'react-icons/md'

export default function ButtonAdd({ onClick }) {

  // const handleClick = () => {
  //   console.log("go")
  // }

  return (
    <div className='button__add'>
      <div onClick={onClick} className='button__addContainer'>
        <MdAddCircleOutline />
        <span>Crear</span>
      </div>
    </div>
  )
}
