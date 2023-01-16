import React, { useState } from "react";
import NavBar from "./navbar";
import modelSRed from './img/modelSRed.jpeg'

/*
objective: click on ipsum to increment with one.


*/

function ProductPage (props) {

    const title = props.title
    const color = props.color
    const price = props.price
    const image = props.image
    const secondImage = props.secondImage
    const carId = props.id
    const cart = props.cart
    const setCart = props.setCart
    
    function click () { 
        const initialCart = cart
        let itemIsPresent = false
        initialCart.map((element) => {
            if(element.id === carId) {
                element.quantity ++
                itemIsPresent = true
            } 
        })
        if(itemIsPresent === false) {
            initialCart.push({id: carId, model: title, color: color, price: price, image: image,  quantity: 1 })
        }
        setCart([...initialCart])
    }

    function consoles () {
        console.log(cart)
    }

    return <div>
        <div className="productPageImageAndText">
            <h1>{title} - {color} ({price})</h1>
            <img className="productPageImage" src={image}/>
        </div>
        <div className="lowerHalfProductPage">
            <div className="description">Tesla designs and manufactures electric vehicles (electric cars and trucks), battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services. Tesla is one of the world's most valuable companies and is, as of 2022, the world's most valuable automaker.</div>
            <div className="productButtons">
                <button onClick={consoles} className="homeShopButton">Add to cart (console)</button>
                <button onClick={click} className="homeShopButton">Buy now (change cart)</button>
            </div>
        </div>

    </div>
}

export default ProductPage;