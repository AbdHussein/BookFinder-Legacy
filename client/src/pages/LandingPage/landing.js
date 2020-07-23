import React from 'react'
import {Link} from "react-router-dom"
import "./style.css"
class Landing extends React.Component {
  render() {
    return (
      <div className="landing"> 
      <div className="container"> 
      <div className="intro">
       <h2> Welcome to book finder.</h2>
       <Link to= "/login">
     <button> <span>login</span></button>
     </Link>
     <Link to= "/signUp">
     <button> <span>signUp</span></button>
     </Link>
      </div>
      </div>
      </div>
    )
  }
}

export default Landing