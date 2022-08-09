import axios from "../axios"

export const deleteActivity = async (id) => {
  const deleteAcitivy = await axios.delete(`/actividades/${id}`)
  return deleteAcitivy.data
}