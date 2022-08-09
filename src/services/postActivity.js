import axios from "../axios"

export const postActivity = async (values, id_solicitud, id_usuario, fecha, estado) => {
  
  const { actividad } = values
  
  const activityResult = await axios.post("/actividades/create", {
    id_solicitud: id_solicitud,
    nombre_actividad: actividad,
    fecha_creacion: fecha,
    id_usuario: id_usuario,
    estado: estado
  })

  return activityResult.data
}