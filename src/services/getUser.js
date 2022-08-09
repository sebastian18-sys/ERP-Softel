export const getAllUsers = () => {
  return fetch('http://localhost:8000/api/v1/users')
    .then(res => res.json())
}