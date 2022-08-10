import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import "./listProjects.scss"
import { MdModeEditOutline, MdDelete } from "react-icons/md"
import Modal from '../../components/Modal'
import AddProject from '../../components/addProject'
import TableHeader from '../../components/tableHeader'
import ButtonAdd from '../../components/ButtonAdd'
import TableFooter from '../../components/tableFooter'
import { useTable } from '../../hooks/useTable'
import { useProjects } from '../../hooks/useProjects'
import { useModal } from '../../hooks/useModal'
import EditProject from '../../components/editProject'
import { Helmet } from 'react-helmet'

export default function ListOfProjects() {

  // localStorage User
  const saved = JSON.parse(localStorage.getItem('user'))
  const getUserLS = saved[0]
  const [getId, setGetId] = useState(null)

  // Hooks
  const { dataProjects, setCount, filterProjects, setDataProjects } = useProjects()
  const rowsPerPage = 5; //rows per table
  const [page, setPage] = useState(1) //initial page
  const { slice, tableRange } = useTable(dataProjects, page, rowsPerPage)
  const showCreate = useModal()
  const showEdit = useModal()


  //Show Modal
  const handleClickEdit = (id, proyecto, presupuesto) => {
    const data = {id, proyecto, presupuesto}
    setGetId(data)
    showEdit.handleClick() 
  }

  //Close Modal
  const handleCloseEdit = () => {
    setCount(count => count + 1)
    showEdit.handleClose()
  }

  const handleCloseCreate = () => {
    setCount(count => count + 1)
    showCreate.handleClose()
  }

  
  return (  
    <div className='projects'>

      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Softel || Proyectos</title>
      </Helmet>

      <Sidebar />
      <div className='projects__container'>
        <Navbar />
        <section className='projects__info'>
          {(getUserLS.estado).toLowerCase() === "admin" && <ButtonAdd onClick={showCreate.handleClick} />}
          <div className='projects__title'>
            <TableHeader title="Lista de Proyectos" data={slice} setData={setDataProjects} filterData={filterProjects} />
            <div className='projects__tableContainer'>
              <table className='table'>
                <thead className='table__head'>
                  <tr>
                    <th scope='col'>Proyecto</th>
                    <th scope='col'>Presupuesto</th>
                    <th scope='col'>Gasto actual</th>
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Acción</th>
                  </tr>
                </thead>
                <tbody className='table__body'>
                {slice.map((value) => (
                <tr key={value.id_proyecto}>
                  <td>{value.Proyecto}</td>
                  <td>S/.{Number(value.Presupuesto).toLocaleString("es-ES")}</td>
                  <td>S/.{Number(value.Disponible_Real).toLocaleString("es-ES")}</td>
                  <td>{value.Usuario}</td>
                  <td className='projects__actions'>
                  {(getUserLS.estado).toLowerCase() === "interno" && <div></div> }
                    {(getUserLS.estado).toLowerCase() === "externo" && <div></div>}
                    {(getUserLS.estado).toLowerCase() === "admin" 
                    &&
                    <>
                      <MdModeEditOutline onClick={() => handleClickEdit(value.id_proyecto, value.Proyecto, value.Presupuesto)} />
                    </> 
                    }
                  </td>
                </tr>
                ))} 
                </tbody>
              </table>
              <TableFooter range={tableRange} setPage={setPage} page={page} slice={slice} />
            </div>
          </div>
        </section>
        {showCreate.showModal && 
          <Modal title="Crear proyecto" onClose={showCreate.handleClose}>
            <AddProject onClose={handleCloseCreate} />
          </Modal>
        }
        {showEdit.showModal && (
          <Modal onClose={showEdit.handleClose}>
            <EditProject
              data={getId} 
              onClose={handleCloseEdit} 
            />
          </Modal>
        )}
      </div>
    </div>
  )
}
