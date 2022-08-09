import React from 'react'
import "./editSolicitud.scss"
import { useForm } from 'react-hook-form'
import { putSolicitud } from '../../services/putSolicitud'

export default function EditSolicitud({ data, onClose }) {

  // props
  const { id, solicitud, proyecto } = data

  // localStorage User
  const saved = JSON.parse(localStorage.getItem('user'))
  const getUserLS = saved[0]

  // Hooks
  const { register, handleSubmit } = useForm()

  // Function PUT data
  const onSubmit = async (values) => {
    const { estado } = values
    await putSolicitud(id, estado)
    onClose()
  }

  return (
    <section className='editSolicitud'>
      <h3>Editar Solicitud</h3>
      <form className='editSolicitud__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='editSolicitud__formText'>
          <label>Solicitud: </label>
          <input
            name='solicitud'
            type='text' 
            disabled
            defaultValue={solicitud}
          />
        </div>
        <div className='editSolicitud__formText'>
          <label>Proyecto: </label>
          <input 
            name='proyecto'
            placeholder='-'
            type='text'
            disabled
            defaultValue={proyecto}
          />
        </div>
        <div className='editSolicitud__formText'>
          <label>Estado: </label>
          <select
            name='estado'
            {...register("estado")}
          >
            <option disabled >En proceso</option>
            <option>Anulado</option>
            <option>Finalizado</option>
          </select>
        </div>
        <button className='editSolicitud__buttonSave'>Guardar</button>
      </form>
    </section>
  )
}
