import axios from "../axios"

export const putProject = async (id, nombre, presupuesto) => {
  const projectEdit = await axios.put('/proyectos', {
    nombre_proyecto: nombre,
    presupuesto: presupuesto,
    id_proyecto: id
  })
  return projectEdit.data
}