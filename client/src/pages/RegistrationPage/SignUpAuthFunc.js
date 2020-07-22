import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:4000/signUp', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    }).catch(err=>{
      console.log(err)
      alert('The user already exists')
    })
}