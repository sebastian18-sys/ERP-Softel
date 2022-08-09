import React from 'react'
// import "./sidebar.scss"
import "./side.css"
import { AiOutlineDashboard } from "react-icons/ai"
import { MdWysiwyg, MdOutlineFormatListBulleted, MdWebStories, MdViewComfy } from "react-icons/md"
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]

  return (
    <section className='sidebar'>
      <header className='sidebar__header'>
          <span className='sidebar__headerLogo'><img src='https://i.ibb.co/BCqmJcN/Screenshot-1-removebg-preview-1.png' alt='logo' loading='lazy'></img></span>
      </header>
      <div className='sidebar__center'>
        <div className='sidebar__usuario'>
          <div>
            <img 
              className='item--avatar'
              // src='https://i.ibb.co/7yBdxZ6/Whats-App-Image-2022-07-29-at-1-54-25-AM.jpg'
              src={`https://unavatar.io/${getUserLS.nombre_usuario}`}
              alt='avatar'
              loading='lazy'
            />   
          </div>
          <div className='usuario__container'>
            <h3>{(getUserLS.nombre_usuario).toUpperCase()}</h3>
            <p>{(getUserLS.estado).toUpperCase()}</p>
          </div>
        </div>
        <ul>
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <li>
              <AiOutlineDashboard />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink 
            to="/activities" 
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <li>
              <MdOutlineFormatListBulleted />
              <span>Mis actividades</span>
            </li>
          </NavLink>
          <NavLink
            to="/solicitud" 
            className={({ isActive }) => (isActive ? "link-active" : "")}                    
          >
            <li>
              <MdWysiwyg />
              <span>Mis Solicitudes</span>
            </li>
          </NavLink>
          <NavLink
            to="/totalSolicitudes" 
            className={({ isActive }) => (isActive ? "link-active" : "")}                             
          >
            <li>
              <MdWebStories />
              <span>Total Solicitudes</span>
            </li>
          </NavLink>
          <NavLink
            to="/proyectos" 
            className={({ isActive }) => (isActive ? "link-active" : "")}                         
          >
            <li>
              <MdViewComfy />
              <span>Proyectos</span>
            </li>
          </NavLink>
          {/* <li>
            <AiOutlineSetting />
            <span>Settings</span>
          </li> */}
        </ul>
      </div>
    </section>
  )
}
