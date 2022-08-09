import axios from "../axios"

export const putSolicitud = async (id, estado) => {
  const solicitudEdit = await axios.put(`/solicitudes/${id}`, {
    estado: estado
  })
  return solicitudEdit.data
}