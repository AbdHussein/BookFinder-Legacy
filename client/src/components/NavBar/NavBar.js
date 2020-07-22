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
                                <Link to= "/">
                                <li>Home</li>
                                </Link>
                                <Link to= "/search">
                                <li>Books</li>
                                </Link>
                                <Link to= "/favorite">
                                <li>Favorite </li>
                                </Link>
                                <li> ReadLater </li>
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