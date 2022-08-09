import { useEffect, useState } from "react"
import { getAllActivitites } from "../services/getAllActivities"

export const useActividad = () => {

  const [dataActividades, setDataActividades] = useState([])
  // const [count, setCount] = useState(0)

  useEffect(() => {

    getAllActivitites().then((data) => {
      setDataActividades(data)
    }).catch(err => {
      console.error(err)
    })

  }, [])

  return {
    dataActividades,
    setDataActividades,
  }
}