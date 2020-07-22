import React from 'react'
import {Link} from "react-router-dom"
import "./style.css"
class Landing extends React.Component {
  render() {
    return (
      <div className="landing"> 
      <div className="container"> 
      <div className="intro">
       <h2> ADOPT A CAT WE NEED YOUR HELP.</h2>
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


{/* <div className="container">
<div className="jumbotron mt-5">
  <div className="col-sm-8 mx-auto">
    <h1 className="text-center">WELCOME</h1>
  </div>
  <Link to= "/login">
     <button> <span>login</span></button>
     </Link>
     <Link to= "/signUp">
     <button> <span>signUp</span></button>
     </Link>
</div>
</div> */}