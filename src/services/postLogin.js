import axios from "../axios"

export const postLogin = async (values) => {
  const { email, contrasena } = values

  const loginResult = await axios.post("/usuarios/login", {
    email: email,
    contrasena: contrasena
  })

  return loginResult.data
}