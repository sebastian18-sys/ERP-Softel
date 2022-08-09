import React from 'react'
import "./delete.scss"

export default function Delete({ title, id, onClose, deleteFetch }) {

  // Function Delete DATA
  const onDeleteData = async (id) => {
      await deleteFetch(id)
      onClose()
  }

  return (
    <section className='delete'>
      <h2>¿Estás seguro que quieres eliminar esta {title}?</h2>
      <div className='delete__button'>
        <button className='delete__buttonDelete' onClick={() => onDeleteData(id)}>Eliminar</button>
      </div>
    </section>
  )
}
