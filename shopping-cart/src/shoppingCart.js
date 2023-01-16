import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "./navbar";

function Cart (props) {

    const [totalPrice, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const cart = props.cart
    const setCart = props.setCart

    function click () {
        console.log(cart)
    }

    function changeQuantity (data, index) {
        if(data.target.value >= 0) {
            let items = cart
            let item = {...cart[index]}
            item.quantity = data.target.value
            items[index] = item
            setCart([...items])
        }
        removeEmptyObject()
    }

    function minus (data, index) {
        data.preventDefault()
        if(cart[index].quantity > 0) {
        let items = cart
        let item = {...cart[index]}
        item.quantity --
        items[index] = item
        setCart([...items])
        }
        removeEmptyObject()
    }

    function plus (data, index) {
        data.preventDefault()
            let items = cart
            let item = {...cart[index]}
            item.quantity ++
            items[index] = item
            setCart([...items])
            removeEmptyObject()
    }

    const cartContent = cart.map((element, index) => {
        return <div key={element.id} className='item'>
            <div className="imageAndTitle">
            {element.model} ({element.color}) <img className="cartImages" src={element.image}/>
            <div className="buttonsAndInput">
                <button onClick={(data) => minus(data, index)} >-</button>
                <input
                onChange={(data) => changeQuantity(data, index)}
                value={cart[index].quantity}
                type='number'
                id="quantity"
                />
                <button onClick={(data) => plus(data, index)}>+</button>
            </div>
            </div>

            <div className="itemPrices">
            <div className="itemPrice"><p>Item Price:</p> {element.price}</div>
            <div className="itemPrice"><p>Item Price Total:</p> { '€' +  (parseInt(element.price.slice(1).split('.').join('')) * element.quantity)} </div>
            </div>
            </div>
    })

    const totalContent = () => {
        let price = 0
        let quantity = 0
        cart.map((element) => {
            price += (totalPrice + (parseInt(element.price.slice(1).split('.').join('')) * element.quantity)) 
            quantity += element.quantity
        })
        let priceWithEuroSign = '€' + price
        return <div className="totalPriceAndQuantityOuter">

            <div className="totalPriceDiv"><div>Total Price:</div> <div>{priceWithEuroSign}</div></div>
            <div className="totalQuantityDiv"><div>Total Quantity:</div> <div>{quantity}</div></div>

            </div>
    }

    const removeEmptyObject = () => {
         let newObject = cart.filter(element => (
            element.quantity > 0
         ))
         console.log(newObject)
         setCart([...newObject])
         console.log(cart)
    }    



    return <div className="shoppingCartPage">
        <div className="shoppingCartMiddle">
        <h1 className="shoppingCartTitle">Shopping Cart</h1>
        <form>
            {cartContent}
        </form>
        <div>{totalContent()}</div>
        <button className="homeShopButton">Proceed to Payment</button>
        </div>
    </div>
}

export default Cart;
