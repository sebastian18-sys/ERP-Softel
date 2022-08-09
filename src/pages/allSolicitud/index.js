import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { MdAddCircleOutline, MdDelete, MdModeEditOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import ButtonAdd from '../../components/ButtonAdd'
import Delete from '../../components/delete'
import EditSolicitud from '../../components/editSolicitud'
import Modal from '../../components/Modal'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import TableFooter from '../../components/tableFooter'
import TableHeader from '../../components/tableHeader'
import { useModal } from '../../hooks/useModal'
import { useSolicitud } from '../../hooks/useSolicitud'
import { useTable } from '../../hooks/useTable'
import { deleteSolicitud } from '../../services/deleteSolicitud'
import "./allSolicitudes.scss"

export default function AllSolicitudes() {

  // State
  const [getId, setGetId] = useState(null)
  const [page, setPage] = useState(1) //initial page
  const rowsPerPage = 5; //rows per table

  // LocalStorage
  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]

  // Hook
  const { allSolicitudes, setCount } = useSolicitud()
  const { slice, tableRange } = useTable(allSolicitudes, page, rowsPerPage)
  const navigate = useNavigate()
  const showEdit = useModal()
  const showAlert = useModal()

  const handleClickTo = () => {
    navigate("/totalSolicitudes/addSolicitud", {replace: true})
  }

  //Show Modal
  const handleClickEdit = (id, solicitud, proyecto) => {
    const data = {id, solicitud, proyecto}
    setGetId(data)
    showEdit.handleClick() 
  }

  const handleClickDelete = (id) => {
    setGetId(id)
    showAlert.handleClick()
  }

  const handleCloseDelete = () => {
    setCount(count => count + 1)
    showAlert.handleClose()
  }

  //Close Modal
  const handleCloseEdit = () => {
    setCount(count => count + 1)
    showEdit.handleClose()
  }

  return (
    <div className='allSolicitudes'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Solicitudes</title>
      </Helmet>

      <Sidebar />
      <div className='allSolicitudes__container'>
        <Navbar />
        <section className='allSolicitudes__info'>
          {(getUserLS.estado).toLowerCase() === "externo" && <ButtonAdd onClick={handleClickTo} />}
          <div className='allSolicitudes__title'>
            <TableHeader title="Lista de Enlaces" />
            <div className='allSolicitudes__tableContainer'>
              <table className='table'>
                <thead className='table__head'>
                  <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Gasto</th>
                    <th scope='col'>Torrera</th>
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Proyecto</th>
                    <th scope='col'>Accion</th>
                  </tr>
                </thead>
                <tbody className='table__body'>
                {slice.map((value) => (
                <tr key={value.id_solicitud}>
                  <td>{value.nombre_solicitud}</td>
                  <td className='allSolicitudes__estado'><p>{(value.estado).toUpperCase()}</p></td>
                  <td>S/.{Number(value.gasto).toLocaleString("es-ES")}</td>
                  <td>{value.torrera}</td>
                  <td>{value.usuario}</td>
                  <td>{value.nombre_proyecto}</td>
                  <td className='allSolicitudes__add'>
                    {(getUserLS.estado).toLowerCase() === "interno" 
                    && 
                    <Link to={`/solicitud/${value.id_solicitud}`}>
                      <MdAddCircleOutline />
                    </Link> }
                    {(getUserLS.estado).toLowerCase() === "externo" 
                    && 
                    <>
                      <MdModeEditOutline onClick={() => handleClickEdit(value.id_solicitud, value.nombre_solicitud, value.nombre_proyecto)} />
                      <MdDelete onClick={() => handleClickDelete(value.id_solicitud)} />
                    </>
                    }
                    {(getUserLS.estado).toLowerCase() === "admin" && <div></div> }
                  </td>
                </tr>
                ))}
                </tbody>
              </table>
              <TableFooter range={tableRange} setPage={setPage} page={page} slice={slice} />
            </div>
          </div>
        </section>
        {showEdit.showModal && (
          <Modal onClose={showEdit.handleClose}>
            <EditSolicitud
              data={getId} 
              onClose={handleCloseEdit} 
            />
          </Modal>
        )}
        {showAlert.showModal && (
          <Modal onClose={showAlert.handleClose}>
            <Delete
              title="solicitud"
              id={getId}
              onClose={handleCloseDelete}
              deleteFetch={deleteSolicitud}
            />
          </Modal>
        )}
      </div>
    </div>
  )
}
