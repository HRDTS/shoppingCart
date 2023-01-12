import React from "react";

function ProductDisplay (props) {

    const image = props.image
    const color = props.color
    const title = props.title
    const price = props.price
    const secondImage = props.secondImage

    //prop for image
    //prop for color
    //prop for title
    //prop for price
    //(optional) prop to show second image when hovered

    return <div className="outerProductDiv">
        <img className="logo" src={image}/>
        <p>{title}</p>
        <p>{price}</p>
        <p>{color}</p>

    </div>
}

export default ProductDisplay;