import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Tesla_logo from './img/Tesla_logo.png'
import { useState } from "react";
import Cart from "./shoppingCart";

function NavBar (props) {

    const cart = props.cart
    const setCart = props.setCart
    const location = useLocation()

    const [toggleCart, setToggleCart] = useState(false)
    const [currentPage, setCurrentPage] = useState(location.pathname)

    const cars = props.cars
    const setCars = props.setCars
    const model = props.model
    const setModel = props.setModel

    const findTesla = (e) => {
        e.preventDefault();
        let inputText = document.getElementById('searchBar').value
        console.log(inputText)

        if(inputText === '') {
            setModel('Tesla Model S')
        } else {
            setModel(inputText)
        }
    }

    function searchStyle () {
        if(document.getElementById('searchBar').style.display !== 'flex') {
            document.getElementById('searchBar').style.display = 'flex'
            document.getElementsByClassName('searchBarButton')[1].style.display = 'flex'
            document.getElementById('search').style.border = '1px solid white'
            document.getElementById('search').style.borderRadius = '10px'
        } else {
            document.getElementById('searchBar').style.display = 'none'
            document.getElementsByClassName('searchBarButton')[1].style.display = 'none'
            document.getElementById('search').style.border = '0px solid white'
            document.getElementById('search').style.borderRadius = '0px'
        }
    }

    const showCart = () => {
        toggleCart ? setToggleCart(false) : setToggleCart(true)
    }


    useEffect((element) => {
        setCurrentPage(location.pathname)
    }, [location.pathname])

    useEffect((element) => {
        console.log(currentPage)
        if(currentPage !== '/productDisplay') {
            document.getElementById('searchBar').style.display = 'none'
            document.getElementsByClassName('searchBarButton')[1].style.display = 'none'
            document.getElementById('search').style.border = '0px solid white'
            document.getElementById('search').style.borderRadius = '0px'
        }
    }, [currentPage])


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
                    <Link to='/productDisplay'>
                    <li id="search" onClick={searchStyle}>search</li>
                    </Link>
                    </div>
                    <div id="searchDiv">
                            <input type='text' className="searchBarButton" id='searchBar'></input>
                            <button className="searchBarButton" id="searchBarButton" onClick={(e) => findTesla(e)}>Find Tesla</button>
                        </div>

                    <div className="cartDiv" onClick={showCart}>
                    <li><img className="cart" src={require('./img/cart3.png')}/></li>
                    <div className="cartContent">{cart.length}</div>

                    </div>
                    <Cart cart={cart} setCart={setCart} setToggleCart={setToggleCart} toggleCart={toggleCart} showCart={showCart}/>
                </div>
    
            </ul>
        </nav>
    </div>
}

export default NavBar;