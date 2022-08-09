import axios from "../axios"

export const getActivityByUser = async (id) => {
  // return fetch(`http://localhost:5000/api/actividades/${id}`).then(res => res.json()) 
  const result = await axios.get(`/actividades/${id}`)
  return result.data
}