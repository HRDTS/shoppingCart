import React from "react";
import NavBar from "./navbar";
import modelSRed from './img/modelSRed.jpeg'

function ProductPage (props) {

    //props for images
    //props for title
    //props for description

    return <div>
        <NavBar/>

        <div className="productPageImageAndText">
            <h1>Tesla model S</h1>
            <img className="productPageImage" src={modelSRed}/>
        </div>
        <div>
            <div className="description">description</div>
            <button className="homeShopButton">Add to cart</button>
        </div>

    </div>
}

export default ProductPage;