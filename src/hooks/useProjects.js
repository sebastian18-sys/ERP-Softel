import { useEffect, useState } from "react"
import { getAllProjects } from "../services/getAllProjects"

export const useProjects = () => {

  const [dataProjects, setDataProjects] = useState([])
  const [filterProjects, setFilterProjects] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {

    getAllProjects().then((data) => {
      setDataProjects(data)
      setFilterProjects(data)
    }).catch(err => {
      console.error(err)
    })

  }, [count])

  return {
    dataProjects,
    filterProjects,
    setCount,
    setDataProjects,
    setFilterProjects
  }
}