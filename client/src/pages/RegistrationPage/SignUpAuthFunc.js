import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/signup', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
}