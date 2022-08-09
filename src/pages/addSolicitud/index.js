import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import "./addSolicitud.scss"
import { useForm } from 'react-hook-form'
import { useProjects } from '../../hooks/useProjects'
import { postSolicitud } from '../../services/postSolicitud'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'


export default function AddSolicitud() {

  // Hooks
  const {register, handleSubmit} = useForm()
  const { dataProjects } = useProjects()
  const navigate = useNavigate()

  // LocalStorage
  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]

  // Function create solicitud
  const onSubmit = async (values) => {
    const id_usuario = getUserLS.id_usuario
    const id_proceso = 1
    const estado = "En proceso"
    console.log("values add solcitud -> ", values)
    // try {
      const result = await postSolicitud(values, id_usuario, id_proceso, estado)
      navigate("/totalSolicitudes", {replace: true})
      console.log("result solcitud ->", result)
    // } catch(err) {
      // console.error(err)
    // }
  }

  return (
    <div className='addSolicitud'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Añadir Solicitud</title>
      </Helmet>

      <Sidebar />
      <div className='addSolicitud__container'>
        <Navbar />
        <section className='addSolcitiud__head'>
          <h3>Crear Solicitud</h3>
        </section>
        <section className='addSolicitud__form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='addSolicitud__formRow'>
              <div className='addSolicitud__formInput'>
                <label>Solicitud<span>*</span></label>
                <input 
                  name='solicitud'
                  type="text"
                  placeholder='Nombre de la solicitud'
                  required
                  {...register("solicitud")}
                />
              </div>
              <div className='addSolicitud__formInput'>
                <label>Gasto<span>*</span></label>
                <input
                  name='gasto' 
                  type="text"
                  placeholder='Ingrese el costo'
                  required
                  {...register("gasto")} 
                />
              </div>
            </div>
            <div className='addSolicitud__formRow'>
              <div className='addSolicitud__formInput'>
                <label>Torrera<span>*</span></label>
                <input 
                  name='torrera'
                  type='text'
                  placeholder='Ingrese el nombre de la torrera'
                  required
                  {...register("torrera")}
                />
              </div>
              <div className='addSolicitud__formInput'>
                <label>Proyecto<span>*</span> </label>
                <select 
                  name='selectProject'
                  {...register("id_proyecto")}
                  required
                >
                  {dataProjects.map(value => (
                    <option value={value.id_proyecto} key={value.id_proyecto}>{value.Proyecto}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='addSolicitud__button'>
              <button>Crear</button>
              <button>Cerrar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}