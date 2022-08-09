import React from 'react'
import "./edit.scss"
import { useForm } from 'react-hook-form'
import { putActivityByUser } from '../../services/putActivityByUser'

export default function EditActivity({ data, onClose }) {

  // props
  const { id, actividad, torrera, solicitud } = data

  // Hooks
  const { register, handleSubmit } = useForm()

  // Function PUT data
  const onSubmit = async (values) => {
    const { estado } = values
    await putActivityByUser(id, estado)
    onClose()
  }

  return (
    <section className='editActivity'>
      <h3>Editar Actividad</h3>
      <form className='editActivity__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='editActivity__formText'>
          <label>Actividad: </label>
          <input
            name='actividad'
            type='text' 
            disabled
            defaultValue={actividad}
          />
        </div>
        <div className='editActivity__formText'>
          <label>Torrera: </label>
          <input 
            name='torrera'
            placeholder='-'
            type='text'
            disabled
            defaultValue={torrera}
          />
        </div>
        <div className='editActivity__formText'>
          <label>Solicitud: </label>
          <input 
            name='solicitud'
            placeholder='Ingrese su nombre'
            type='text'
            disabled
            defaultValue={solicitud}
          />
        </div>
        <div className='editActivity__formText'>
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
        <button className='editActivity__buttonSave'>Guardar</button>
      </form>
    </section>
  )
}
