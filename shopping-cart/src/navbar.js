import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Tesla_logo from './img/Tesla_logo.png'
import { useState } from "react";

function NavBar (props) {

    const cart = props.cart

    function consoleFunction () {
        if(document.getElementById('searchBar').style.display !== 'flex') {
            document.getElementById('searchBar').style.display = 'flex'
        } else {
            document.getElementById('searchBar').style.display = 'none'
        }
    }

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
                    <div>
                    <li id="search" onClick={consoleFunction}>search</li>

                    </div>
                    <div id="searchDiv">
                            <input type='text' id='searchBar'></input>
                        </div>
                    <Link to="/shoppingCart">
                    <div className="cartDiv">
                    <li><img className="cart" src={require('./img/cart3.png')}/></li>
                    <div className="cartContent">{cart.length}</div>
                    </div>
                    </Link>   
                </div>
    
            </ul>
        </nav>
    </div>
}

export default NavBar;