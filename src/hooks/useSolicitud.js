import { useEffect, useState } from "react"
import { getAllSolicitudes } from "../services/getAllSolicitudes"

export const useSolicitud = () => {

  const [allSolicitudes, setAllSolicitudes] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {

    getAllSolicitudes().then((data) => {
      setAllSolicitudes(data)
    }).catch(err => {
      console.error(err)
    })

  }, [count])

  return {
    allSolicitudes,
    setAllSolicitudes,
    setCount
  }
}