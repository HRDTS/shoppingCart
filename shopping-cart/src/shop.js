import React from "react";
import ProductDisplay from "./productDisplay";
import image from './img/cart3.png'


function ShoppingPage (props) {
    return <div className="shoppingLayout">
            <h1>Shop your Tesla</h1>
            <div className="shoppingLayoutInside">
            <ul>
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
            </ul>
            <div className="productFlex">
                <div className="productGrid">
                <ProductDisplay image={image} secondImage={image} color={'blue'} title={'Tesla model S'} price={70000}/>
                <ProductDisplay image={image} secondImage={image} color={'blue'} title={'Tesla model S'} price={70000}/>
                <ProductDisplay image={image} secondImage={image} color={'blue'} title={'Tesla model S'} price={70000}/>
                <ProductDisplay image={image} secondImage={image} color={'blue'} title={'Tesla model S'} price={70000}/>
                </div>
            </div>



            </div>
    </div>
}

export default ShoppingPage;