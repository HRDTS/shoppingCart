import React from "react";
import Tesla_logo from './img/Tesla_logo.png'

function NavBar (props) {
    // #e61134
    return <div className="navbar">
        
        <nav >
            <ul className="navbarList">
                <div className="logoAndTitle">
                    <img className="logo" src={require('./img/Tesla_logo.png')}/>
                    <li className="title">Powered by Solar, built for the future</li>
                </div>
                <div className="rightNavbar">
                    <a href="" target={"_blank"} rel='noreferrer'>
                    <li>shop</li>
                    </a>
                    <a href="" target={"_blank"} rel='noreferrer'>
                    <li>search</li>
                    </a>
                    <a href="" target={"_blank"} rel='noreferrer'>
                    <li><img className="cart" src={require('./img/cart3.png')}/></li>
                    </a>   
                </div>
    
            </ul>
        </nav>
    </div>
}

export default NavBar;