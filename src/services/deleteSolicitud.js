import axios from "../axios"

export const deleteSolicitud = async (id) => {
  const deleteSolicitud = await axios.delete(`/solicitudes/${id}`)
  return deleteSolicitud.data
}