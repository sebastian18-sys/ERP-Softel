import axios from "../axios"

export const getAllProjects = () => {
  // return fetch("https://appserver-erp.herokuapp.com/api/proyectos").then(res => res.json())
  // return fetch("http://localhost:5000/api/proyectos").then(res => res.json())
  return axios.get("/proyectos").then(res => res.data)
}