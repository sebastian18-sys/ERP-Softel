import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import "./newActivity.scss"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { postActivity } from '../../services/postActivity'
import { Helmet } from 'react-helmet'

export default function NewActivity() {

  // States
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  // Get Id Solicitud
  const { mysolicitudId } = useParams()

  // LocalStorage
  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]

  // Function create activity
  const onSubmit = async (values) => {
    const date = new Date()
    const fecha = new Intl.DateTimeFormat("es").format(date);
    const estado = "En proceso"
    
    const result = await postActivity(values, mysolicitudId, getUserLS.id_usuario, fecha, estado)
    console.log("result acitivity ->", result)
    navigate("/activities", {replace: true})
  }

  return (
    <div className='newActivitie'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Añadir Actividad</title>
      </Helmet>

      <Sidebar />
      <div className='newActivitie__container'>
        <Navbar />
        <section className='newActivitie__head'>
          <h3>Crear Actividad</h3>
        </section>
        <section className='newActivitie__form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='newActivitie__formRow'>
              <div className='newActivitie__formInput'>
                <label>Actividad<span>*</span></label>
                <input 
                  name='actividad'
                  type="text"
                  placeholder='Nombre de la actividad'
                  {...register("actividad")}
                />
              </div>
              <div className='newActivitie__formInput'>
                <label>Descripcion<span>*</span></label>
                <input type="text" />
              </div>
            </div>
            <div className='newActivitie__formRow'>
              <div className='newActivitie__formInput'>
                <label>Cargo<span>*</span></label>
                <select name='select'>
                  <option disabled>--Seleccione--</option>
                  <option>RF</option>
                  <option>TX</option>
                  <option>Otros</option>
                </select>
              </div>
              <div className='newActivitie__formInput'>
                <label>Telefono <span>*</span> </label>
                <input type="text" />
              </div>
            </div>
            <div className='newActivitie__formRow'>
              <div className='newActivitie__formInput'>
                <label>Trabajo a realizar <span>*</span></label>
                <select name='select'>
                  <option disabled>--Seleccione--</option>
                  <option>Reemplazo</option>
                  <option>Nuevo</option>
                  <option>Desmontaje</option>
                </select>
              </div>
              <div className='newActivitie__formInput'>
                <label>Cargar NTP <span>*</span> </label>
                <select name='select'>
                  <option disabled>--Seleccione--</option>
                  <option>Reemplazo</option>
                  <option>Nuevo</option>
                  <option>Desmontaje</option>
                </select>
              </div>
            </div>
            <div className='newActivitie__button'>
              <button>Crear</button>
              <button>Cerrar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
