import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function ProductDisplay (props) {

    const image = props.image
    const color = props.color
    const title = props.title
    const price = props.price
    const id = props.id
    const secondImage = props.secondImage

    useEffect(() =>{
        console.log(title)
    })

    return <div key={id} className="outerProductDiv">
        <p>{title}</p>
        <Link to={`/productPage/${id}`}>
        <div className="container">
            <img className="productImage" src={image}/>
            <div className="overlay">
                <img className="productImage" src={secondImage}/>
            </div>
        </div>    
        </Link>
        <p>{price}</p>
        <p>{color}</p>

    </div>

}

export default ProductDisplay;