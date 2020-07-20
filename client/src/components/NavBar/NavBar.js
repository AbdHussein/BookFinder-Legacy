import React from 'react';
import "./style.css"
import {Link} from "react-router-dom"

class NavBar extends React.Component {
    state = {}
    
    render(){
        return (
            <div className="NavBar__div">
                <nav className="nav">
                    <div className="container">
                        <div className="logo">
                            <a href="#"><span>BOOK</span> FINDER </a>
                        </div>
                        <div className="main_list" id="mainListDiv">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Books</a></li>
                                <li><a href="#">Favorite </a></li>
                                <span><li><a href="#"> ReadLater </a></li></span>
                                <li><a href="#">logOut</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

              </div>
        )
    }
    }
    export default NavBar