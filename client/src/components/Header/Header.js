import React from 'react';
import "./style.css"
class Header extends React.Component {
    state = {}
    render(){
        return (
            <div className="header__div">
            <div className="slider">
              <div className="container">
                <div className="intro">
                <h2> Find Books With Just <span>One Search</span></h2>
                <button> <span>Explore Now</span></button>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
    }
    export default Header