import axios from "../axios"

export const putActivityByUser = (id, estado) => {
  const actividadEdit = axios.put(`/actividades/${id}`, {
    estado: estado
  })
  return actividadEdit.data
}