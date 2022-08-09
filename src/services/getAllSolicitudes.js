import axios from "../axios"

export const getAllSolicitudes = async () => {
  const result = await axios.get("/solicitudes")
  return result.data
}