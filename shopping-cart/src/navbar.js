import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Tesla_logo from './img/Tesla_logo.png'
import { useState } from "react";
import Cart from "./shoppingCart";

function NavBar (props) {

    const cart = props.cart
    const setCart = props.setCart

    const [toggleCart, setToggleCart] = useState(false)

    function consoleFunction () {
        if(document.getElementById('searchBar').style.display !== 'flex') {
            document.getElementById('searchBar').style.display = 'flex'
            document.getElementById('search').style.border = '1px solid white'
            document.getElementById('search').style.borderRadius = '10px'
        } else {
            document.getElementById('searchBar').style.display = 'none'
            document.getElementById('search').style.border = '0px solid white'
            document.getElementById('search').style.borderRadius = '0px'
        }
    }

    const showCart = () => {
        console.log('abdc')
        toggleCart ? setToggleCart(false) : setToggleCart(true)
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

                    <div className="cartDiv" onClick={showCart}>
                    <li><img className="cart" src={require('./img/cart3.png')}/></li>
                    <div className="cartContent">{cart.length}</div>

                        <Cart cart={cart} setCart={setCart} setToggleCart={setToggleCart} toggleCart={toggleCart} showcart={showCart}/>
                        </div>
 
                </div>
    
            </ul>
        </nav>
    </div>
}

export default NavBar;