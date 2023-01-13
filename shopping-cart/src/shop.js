import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDisplay from "./productDisplay";
import NavBar from "./navbar";
import image from './img/cart3.png'
import modelSRed from './img/modelSRed.jpeg'
import modelSBlue from './img/modelSBlue.jpeg'
import modelSBlack from './img/modelSBlack.jpeg'
import modelSWhite from './img/modelSWhite.jpeg'
import modelSRed2 from './img/modelSRed2.jpeg'
import modelSBlue2 from './img/modelSBlue2.jpeg'
import modelSBlack2 from './img/modelSBlack2.jpeg'
import modelSWhite2 from './img/modelSWhite2.jpeg'
import model3Black from './img/model3Black.jpeg'
import model3Black2 from './img/model3Black2.jpeg'
import model3White from './img/model3White.jpeg'
import model3White2 from './img/model3White2.jpeg'
import cybertruck from './img/cybertruck.jpg'

/*
                <ProductDisplay image={modelSRed} secondImage={modelSRed2} color={'red'} title={'Tesla model S'} price={'€70.000'}/>
                <ProductDisplay image={modelSBlue} secondImage={modelSBlue2} color={'blue'} title={'Tesla model S'} price={'€70.000'}/>
                <ProductDisplay image={modelSBlack} secondImage={modelSBlack2} color={'black'} title={'Tesla model S'} price={'€70.000'}/>
                <ProductDisplay image={modelSWhite} secondImage={modelSWhite2} color={'white'} title={'Tesla model S'} price={'€70.000'}/>
*/


function ShoppingPage (props) {

    const [cars, setCars] = useState([])

    const carInformation = [
        {title: 'Tesla model S', color: 'red', price: '€70.000', image: {modelSRed}, secondImage: {modelSRed2}, id : 'TMSRED'},
        {title: 'Tesla model S', color: 'blue', price: '€70.000', image: {modelSBlue}, secondImage: {modelSBlue2} , id : 'TMSBLUE'},
        {title: 'Tesla model S', color: 'black', price: '€70.000', image: {modelSBlack}, secondImage: {modelSBlack2}, id : 'TMSBLACK'},
        {title: 'Tesla model S', color: 'white', price: '€70.000', image: {modelSWhite}, secondImage: {modelSWhite2}, id : 'TMSWHITE'},

        {title: 'Tesla model 3', color: 'black', price: '€35.000', image: {model3Black}, secondImage: {model3Black2}, id : 'TM3BLACK'},
        {title: 'Tesla model 3', color: 'white', price: '€35.000', image: {model3White}, secondImage: {model3White2}, id : 'TM3WHITE'},

        {title: 'Cybertruck', color: 'grey', price: '€50.000', image: {cybertruck}, secondImage: {cybertruck}, id : 'CT'},
    ]

    useEffect(() => {
        setCars(carInformation)

    }, [])    


    return <div>
    <NavBar/> 
    <div className="shoppingLayout">
            <h1>Shop your Tesla</h1>
            <div className="shoppingLayoutInside">
            <ul className="sideBar">
                <li>Model S</li>
                <li>Model 3</li>
                <li>Cybertruck</li>
            </ul>
            <div className="productFlex">
                <div className="productGrid">
                <ModelS cars={cars} />
                </div>
            </div>

            </div>
    </div>
    </div> 
}

function ModelS (props) {

    const cars = props.cars
    useEffect(() =>{
        cars.map((element) => {

        })
    })

    return (
        <div>
            {cars.map(element => (
            <ProductDisplay title={cars.title} color={cars.color} price={cars.price} image={cars.image} secondImage={cars.secondImage} id={cars.id}/>
        )) }
    </div>
    )
}

export default ShoppingPage;