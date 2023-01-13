import React from "react";
import { Link } from "react-router-dom";
import Tesla_logo from './img/Tesla_logo.png'

function NavBar (props) {
    // #e61134
    return <div className="navbar">
        
        <nav >
            <ul className="navbarList">
                <div className="logoAndTitle">
                    <Link to="/"><img className="logo" src={require('./img/Tesla_logo.png')}/></Link>
                    <li className="title">Powered by Solar, built for the future</li>
                </div>
                <div className="rightNavbar">
                    <Link to="/productDisplay">
                    <li>shop</li>
                    </Link>
                    <Link to="/productDisplay">
                    <li>search</li>
                    </Link>
                    <Link to="/productDisplay">
                    <li><img className="cart" src={require('./img/cart3.png')}/></li>
                    </Link>   
                </div>
    
            </ul>
        </nav>
    </div>
}

export default NavBar;