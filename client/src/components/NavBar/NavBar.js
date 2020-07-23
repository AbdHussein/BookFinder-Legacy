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
                            <span>BOOK</span> FINDER 
                        </div>
                        <div className="main_list" id="mainListDiv">
                            <ul>
                                <Link to= "/home">
                                <li>Home</li>
                                </Link>
                                <Link to= "/search">
                                <li>Books</li>
                                </Link>
                                <Link to= "/favorite">
                                <li>Favorite </li>
                                </Link>
                                <li>logOut</li>
                            </ul>
                        </div>
                    </div>
                </nav>

              </div>
        )
    }
    }
    export default NavBar