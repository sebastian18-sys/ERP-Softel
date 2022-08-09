import React from 'react'
import { putProject } from '../../services/putProject'
import { useForm } from 'react-hook-form'
import "./editProject.scss"

export default function EditProject({ data, onClose }) {
  
  // props
  const { id, proyecto, presupuesto } = data

  // Hooks
  const { register, handleSubmit } = useForm()

  // Function PUT data
  const onSubmit = async (values) => {
    const { proyecto, presupuesto } = values
    await putProject(id, proyecto, presupuesto)
    onClose()
  }
  
  return (
    <section className='editSolicitud'>
      <h3>Editar Proyecto</h3>
      <form className='editSolicitud__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='editSolicitud__formText'>
          <label>Proyecto: </label>
          <input
            name='proyecto'
            type='text' 
            defaultValue={proyecto}
            {...register("proyecto")}
          />
        </div>
        <div className='editSolicitud__formText'>
          <label>Presupuesto: </label>
          <input 
            name='presupuesto'
            placeholder='-'
            type='text'
            defaultValue={presupuesto}
            {...register("presupuesto")}
          />
        </div>
        <button className='editSolicitud__buttonSave'>Guardar</button>
      </form>
    </section>
  )
}
