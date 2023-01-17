import React, { useEffect, useState } from "react";
import ProductDisplay from "./productDisplay";
import NavBar from "./navbar";


function ShoppingPage (props) {

    const carInformation = props.carInformation


    const cars = props.cars
    const setCars = props.setCars
    const model = props.model
    const setModel = props.setModel


    useEffect(() => {
        setCars(carInformation)

    }, [])    

    return <div>
    <div className="shoppingLayout">
            <h1>Shop your Tesla</h1>
            <div className="shoppingLayoutInside">
            <ul className="sideBar">
                <li onClick={(e) => setModel('Tesla ' + e.target.textContent)} className="sidebarCatalogus">Model S</li>
                <li onClick={(e) => setModel('Tesla ' + e.target.textContent)} className="sidebarCatalogus">Model 3</li>
                <li onClick={(e) => setModel('Tesla ' + e.target.textContent)} className="sidebarCatalogus">Cybertruck</li>
            </ul>
            <div className="productFlex">
                <ProductDisplay cars={cars} model={model} />
            </div>

            </div>
    </div>
    </div> 
}

export default ShoppingPage;