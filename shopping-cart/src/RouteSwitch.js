import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./shoppingCart";
import NavBar from "./navbar";
import HomePage from "./home";
import ProductDisplay from "./productDisplay";
import ProductPage from "./productPage";
import App from "./App";
import ShoppingPage from "./shop";
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
import { useState } from "react";

//

const RouteSwitch = () => {

    const [cart, setCart] = useState([])
    const carInformation = [
        
        {title: 'Tesla Model S', color: 'red', price: '€70000', image: modelSRed, secondImage: modelSRed2, id : 'TMSRED'},
        {title: 'Tesla Model S', color: 'blue', price: '€70000', image: modelSBlue, secondImage: modelSBlue2 , id : 'TMSBLUE'},
        {title: 'Tesla Model S', color: 'black', price: '€70000', image: modelSBlack, secondImage: modelSBlack2, id : 'TMSBLACK'},
        {title: 'Tesla Model S', color: 'white', price: '€70000', image: modelSWhite, secondImage: modelSWhite2, id : 'TMSWHITE'},
        
        {title: 'Tesla Model 3', color: 'black', price: '€35000', image: model3Black, secondImage: model3Black2, id : 'TM3BLACK'},
        {title: 'Tesla Model 3', color: 'white', price: '€35000', image: model3White, secondImage: model3White2, id : 'TM3WHITE'},

        {title: 'Tesla Cybertruck', color: 'grey', price: '€50000', image: cybertruck, secondImage: cybertruck, id : 'CT'},
    ]

    const routeComponents = carInformation.map(({title, color, price, image, secondImage, id }) => {
        return <Route key={id} path={`/productPage/${id}`} element={<ProductPage title={title} color={color}
         price={price} image={image} secondImage={secondImage} id={id} cart={cart} setCart={setCart} />} />
    })

    return (
        <BrowserRouter>
        <NavBar cart={cart} setCart={setCart}/>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/productDisplay" element={<ShoppingPage carInformation={carInformation}/>}/>
                <Route path='/shoppingCart' element={<Cart cart={cart} setCart={setCart} />} />
                {routeComponents}
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;