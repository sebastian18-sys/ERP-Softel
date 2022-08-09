import React, { useState } from 'react'
import "./login.scss"
import { MdLockOutline, MdPerson, MdOutlineKeyboardArrowRight} from "react-icons/md"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../services/postLogin'
import { useStateValue } from '../../context/userContext'
import { Helmet } from 'react-helmet'

export default function Login() {


  // State
  const [error,setError]=useState();

  // Hooks and reducer
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [{}, dispatch] = useStateValue();

  // Function submit date validate
  const onSubmit = async (values) => {
    console.log(values)
    try {
      const result = await postLogin(values)
      console.log("result", result)
      localStorage.setItem("user", JSON.stringify(result));
      const getUser = JSON.parse(localStorage.getItem('user'));
      console.log("localstorage user", getUser)
      if(result.length > 0) {
        navigate("/", {replace: true})
        dispatch({
          type: "SET_USER",
          user: getUser[result.length - 1]
        })
      } else {
        console.log("Datos invalidos")
        setError('Email o contraseña inválido')
      }

    } catch (err) {
      console.log("Error...")
    }
  }

  return (
    <div className='login'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Login</title>
      </Helmet>

      <div className='login__container'>
        <header className='login__header'>
          <img src='https://i.ibb.co/BCqmJcN/Screenshot-1-removebg-preview-1.png' alt='logo' loading='lazy'></img>
          <span>Ingrese sus credenciales</span>
        </header>
        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__container'>          
            <label>
              <MdPerson />
              <input
                name='email'
                type='text' 
                placeholder='Ingrese su usuario'
                required
                {...register('email')}
              />
            </label>
            <label>
              <MdLockOutline />
              <input 
                name='contrasena'
                placeholder='Ingrese su contraseña'
                type="password"
                autoComplete="on"
                required
                {...register('contrasena')}
              />
            </label>
            <div className='checkbox'>
              <input type="checkbox" />
              <p>Recordar</p>
            </div>
            <button className='button'>
              <p>Acceder</p>
              <MdOutlineKeyboardArrowRight />
            </button>
            {error && (
              <div className='error_message'>
                <p>{error}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
