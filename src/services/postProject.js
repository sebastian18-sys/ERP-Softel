import axios from "../axios"

export const postProject = async (values, id_user) => {
  const { proyecto, presupuesto } = values
  const projectResult = await axios.post("/proyectos/create", {
    nombre_proyecto: proyecto,
    presupuesto_proyecto: presupuesto,
    id_usuario: id_user
  }) 
  return projectResult.data
}