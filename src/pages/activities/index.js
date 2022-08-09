import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { MdDelete, MdModeEditOutline } from 'react-icons/md'
import Delete from '../../components/delete'
import EditActivity from '../../components/editActivity'
import Modal from '../../components/Modal'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import TableFooter from '../../components/tableFooter'
import TableHeader from '../../components/tableHeader'
import { useModal } from '../../hooks/useModal'
import { useTable } from '../../hooks/useTable'
import { deleteActivity } from '../../services/deleteAcitivity'
import { getActivityByUser } from '../../services/getActivityByUser'
import "./activities.scss"

export default function Activities() {

  // States
  const [dataActivities, setDataActivities] = useState([])
  const [getId, setGetId] = useState(null)
  const [count, setCount] = useState(0)

  // LocalStorage User
  const saved = JSON.parse(localStorage.getItem('user'));
  const getUserLS = saved[0]

  // Hooks
  const rowsPerPage = 5; //rows per table
  const [page, setPage] = useState(1) //initial page
  const { slice, tableRange } = useTable(dataActivities, page, rowsPerPage)
  const showEdit = useModal()
  const showAlert = useModal() 

    //Show Modal
    const handleClickEdit = (id, actividad, torrera, solicitud) => {
      const data = {id, actividad, torrera, solicitud}
      setGetId(data)
      showEdit.handleClick()
      
    }

    //Close Modal
    const handleCloseEdit = () => {
      setCount(count => count + 1)
      showEdit.handleClose()
    }

    const handleClickDelete = (id) => {
      setGetId(id)
      showAlert.handleClick()
    }

    const handleCloseDelete = () => {
      setCount(count => count + 1)
      showAlert.handleClose()
    }


  // Load Data
  useEffect(() => {
    getActivityByUser(getUserLS.id_usuario).then((data) => {
      setDataActivities(data)
    })
  }, [count])

  return (
    <div className='activities'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Actividades</title>
      </Helmet>

      <Sidebar />
      <div className='activities__container'>
        <Navbar />
        <section className='activities__info'>          
          <div className='activities__title'>
            <TableHeader title="Lista de Enlaces" />
            <div className='activities__tableContainer'>
              <table className='table'>
                <thead className='table__head'>
                  <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Torrera</th>
                    <th scope='col'>Solcitud</th>
                    <th scope='col'>Proyecto</th>
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Fecha de creacion</th>
                    <th scope='col'>Accion</th>
                  </tr>
                </thead>
                <tbody className='table__body'>
                {slice.map((value) => (
                <tr key={value.id_actividad}>
                  <td>{value.nombre_actividad}</td>
                  <td className='activities__estado'><p>{(value.estado).toUpperCase()}</p></td>
                  <td>{value.torrera}</td>
                  <td>{value.nombre_solicitud}</td>
                  <td>{value.nombre_proyecto}</td>
                  <td>{value.usuario}</td>
                  <td>{value.fecha_creacion}</td>
                  <td className='activities__add'>
                    <MdModeEditOutline onClick={() => handleClickEdit(value.id_actividad, value.nombre_actividad, value.torrera, value.nombre_solicitud)} />
                    <MdDelete onClick={() => handleClickDelete(value.id_actividad)} />
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
            <EditActivity
              data={getId} 
              onClose={handleCloseEdit} 
            />
          </Modal>
        )}
        {showAlert.showModal && (
          <Modal onClose={showAlert.handleClose}>
            <Delete 
              title="actividad"
              id={getId}
              onClose={handleCloseDelete}
              deleteFetch={deleteActivity}
            />
          </Modal>
        )}
      </div>
    </div>
  )
}
