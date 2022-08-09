import React from 'react'
import "./tableHeader.scss"
import { MdOutlineSearch } from "react-icons/md"

export default function TableHeader({ title, data, setData, filterData }) {

  // Function filter table
  const filter = (e) => {
    // corregir filter dinamic item.name
    const text = e.target.value
    if(text) {
      const newData = data.filter((item) => {
        const itemData = item.Proyecto ? item.Proyecto.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      })
      console.log("newData", newData)
      setData(newData) 
    } else {
      setData(filterData)
    }
  }

  return (
    <div className='projects__titleHeader'>
      <header>
        <p>{title}</p>
      </header>
      <div className='projects__filter'>
        <p>Filtro: </p>
        <input 
          placeholder='Ingrese para filtrar por nombre...'
          type="text"
          onChange={filter}
        />
        <MdOutlineSearch />
      </div>
    </div>
  )
}
