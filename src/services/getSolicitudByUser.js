import axios from "../axios"

export const getSolicitudByUser = async (id) => {
  // return fetch(`http://localhost:5000/api/solicitudes/${id}`).then(res => res.json())
  const result = await axios.get(`solicitudes/${id}`)
  return result.data
} 