import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function ProductDisplay (props) {

    const cars = props.cars
    const model = props.model

    return <div className="productGrid">
            {cars.map(element => {
                if(element.title === model) {
                    return     <div key={element.id} className="outerProductDiv">
                    <p>{element.title}</p>
                    <Link to={`/productPage/${element.id}`}>
                    <div className="container">
                        <img className="productImage" src={element.image}/>
                        <div className="overlay">
                            <img className="productImage" src={element.secondImage}/>
                        </div>
                    </div>    
                    </Link> 
                    <p>{element.price}</p>
                    <p>{element.color}</p>
            
                </div>
                }
            } 
        )}
    </div>
}

export default ProductDisplay;