import axios from "../axios"

export const getAllActivitites = async () => {
  // return fetch("https://appserver-erp.herokuapp.com/api/actividades")
    // .then(res => res.json())
  // return fetch("http://localhost:5000/api/actividades").then(res => res.json())
  const result = await axios.get("/actividades")
  return result.data
}