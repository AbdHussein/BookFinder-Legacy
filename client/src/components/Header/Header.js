import React from 'react';
import "./style.css"
import {Link} from "react-router-dom"
class Header extends React.Component {
    state = {}
    render(){
        return (
            <div className="header__div">
            <div className="slider">
              <div className="container">
                <div className="intro">
                <h2> Find Books With Just <span>One Search</span></h2>
                <Link to= "/search">
                <button> <span>Explore Now</span></button>
                </Link>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
    }
    export default Header