import axios from 'axios'

export const login = user => {
  return axios
    .post('/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.status)
      localStorage.setItem('usertoken', response.data.token)
      return response.data 
    })
    .catch(err => {
      console.log(err)
      alert(err.response.data.message)
    })
}