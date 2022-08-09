import React from 'react'
import { useNotification } from '../../hooks/useNotification'
import "./addProject.scss"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postProject } from '../../services/postProject'

export default function AddProject() {

  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { handleNotification } = useNotification()

  const onSubmit = async (values) => {
    try {
      const data = await postProject(values, getUserLS.id_usuario)
      console.log("Data ->", data)
      if(data) {
        navigate("/proyectos", {replace: true})
      } else {
        console.log("Datos invalidos")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className='addProject'>
      <form className='addProject__container' onSubmit={handleSubmit(onSubmit)}>
        <div className='addProject__formText'>
          <label>Proyecto: </label>
          <input 
            name='proyecto'
            placeholder='Ingrese el nombre de su proyecto'
            type="text"
            required
            {...register('proyecto')}
          />
        </div>
        <div className='addProject__formText'>
          <label>Presupuesto: </label>
          <input 
            name='presupuesto'
            placeholder='Ingrese el monto'
            type="text"
            required
            {...register('presupuesto')}
          />
        </div>
        <div className='addProject__formText'>
          <label>Descripción: </label>
          <textarea
            name='descripcion'
            placeholder='Ingrese su descripción'
            type="text"
            {...register('descripcion')}
          />
        </div>
        <div className='create__buttonSave'>
          <button onClick={handleNotification}>Guardar</button>
        </div>
      </form>
    </section>
  )
}
