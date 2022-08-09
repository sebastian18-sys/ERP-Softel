import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { MdDelete, MdModeEditOutline } from 'react-icons/md'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import TableFooter from '../../components/tableFooter'
import TableHeader from '../../components/tableHeader'
import { useTable } from '../../hooks/useTable'
import { getSolicitudByUser } from '../../services/getSolicitudByUser'
import "./solicitud.scss"

export default function Solicitud() {

  // States
  const [solicitudId, setSolicitudId] = useState([])
  const [filterSolicitudId, setFilterSolicitudId] = useState([])

  // LocalStorage
  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]

  // Hook Pagination
  const rowsPerPage = 5; //rows per table
  const [page, setPage] = useState(1) //initial page
  const { slice, tableRange } = useTable(solicitudId, page, rowsPerPage)


  useEffect(() => {
    getSolicitudByUser(getUserLS.id_usuario).then(data => {
      setSolicitudId(data)
      setFilterSolicitudId(data)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  console.log("solicitud", solicitudId)
  console.log("id_user ->", getUserLS.id_usuario)

  return (
    <div className='solicitud'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Mis Solicitudes</title>
      </Helmet>

      <Sidebar />
      <div className='solicitud__container'>
        <Navbar />
        <section className='solicitud__info'>
          <div className='solicitud__title'>
            <TableHeader title="Lista de Enlaces" data={slice} setData={setSolicitudId} filterData={filterSolicitudId} />
            <div className='solicitud__tableContainer'>
              <table className='table'>
                <thead className='table__head'>
                  <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Proyecto</th>
                    <th scope='col'>Accion</th>
                  </tr>
                </thead>
                <tbody className='table__body'>
                {slice.map((value, index) => (
                <tr key={index}>
                  <td>{value.nombre_solicitud}</td>
                  <td className='solicitud__estado'><p>{(value.estado).toUpperCase()}</p></td>
                  <td>{value.usuario}</td>
                  <td>{value.nombre_proyecto}</td>
                  <td>
                    {(getUserLS.estado).toLowerCase() === "interno" && <div></div>}
                    {(getUserLS.estado).toLowerCase() === "externo" 
                      ?         
                      <>
                        <MdModeEditOutline />
                        <MdDelete />
                      </>
                      : <div></div>
                    }
                    {(getUserLS.estado).toLowerCase() === "admin" && <div></div>}
                  </td>
                </tr>
                ))}
                </tbody>
              </table>
              <TableFooter range={tableRange} setPage={setPage} page={page} slice={slice} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
