import React, { Component } from 'react'
import { register } from './SignUpAuthFunc'
import {Link} from 'react-router-dom'
import "./style.css"
class SignUp extends Component {
  constructor() {
    super()
    this.state = {
       firstName: '',
       lastName: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const{firstName,lastName,email,password} = this.state
    const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    }).catch((err)=>{
      this.props.history.push(`/signUp`)
      console.log(err)
    })
  }

  render() {
    return (
      <div className="signUp">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter your lastname name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
              <div className="signUp" style={{marginTop:"30px",backgroundColor:"#262626"}}>  
              <Link to="/login">
              <button
                type="submit"
                className="btn btn-lg btn-secondary btn-block"
              >
                Signin
              </button>
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp