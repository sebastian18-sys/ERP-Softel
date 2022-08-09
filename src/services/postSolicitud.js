import axios from "../axios"

export const postSolicitud = async (values, id_usuario, id_proceso, estado) => {

  const { solicitud, gasto, torrera, id_proyecto } = values

  const solicitudCreate = await axios.post("/solicitudes/create", {
    nombre_solicitud: solicitud,
    estado: estado,
    gasto: gasto,
    torrera: torrera,
    id_usuario: id_usuario,
    id_proceso: id_proceso,
    id_proyecto: id_proyecto
  })
  return solicitudCreate.data
}