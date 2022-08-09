import { useEffect, useState } from "react"
import { getAllProjects } from "../services/getAllProjects"

export const useProjects = () => {

  const [dataProjects, setDataProjects] = useState([])
  const [filterProjects, setFilterProjects] = useState([])

  useEffect(() => {

    getAllProjects().then((data) => {
      setDataProjects(data)
      setFilterProjects(data)
    }).catch(err => {
      console.error(err)
    })

  }, [])

  return {
    dataProjects,
    filterProjects,
    setDataProjects,
    setFilterProjects
  }
}