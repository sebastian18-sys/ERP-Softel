import axios from "axios"

export const getAllUsers = async () => {
  const result = await axios.get("/usuarios")
  return result.data
}