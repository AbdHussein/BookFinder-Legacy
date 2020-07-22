import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

//registeration page & switch to login page
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // save the information in db
  handleSubmit(event) {
    console.log(this.state, 'this.state');
    const { firstName, lastName, email, password } = this.state;

    axios
      .post(`http://localhost:5000/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.message, 'response');
        if (response.data.message === 'Signed Up successfully') {
          console.log('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.setUserAuth(true);
          this.props.history.push('/auth/login');
        }
        alert('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
      })
      .catch((error) => {
        console.log('registration error', error);
        this.props.setUserAuth(false);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div class='loginform'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            class='inputbox'
            type='text'
            name='firstName'
            placeholder='FirstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            class='inputbox'
            type='text'
            name='lastName'
            placeholder='LastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            class='inputbox'
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            class='inputbox'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />

          <button type='submit' class='butooon'>
            Register
          </button>
          <hr />
          <p>
            Already have an account? <Link to='/auth/login'> LOGIN </Link>
          </p>
        </form>
      </div>
    );
  }
}
export default withRouter(Registration);
