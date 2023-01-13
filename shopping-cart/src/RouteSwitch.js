import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import HomePage from "./home";
import ProductDisplay from "./productDisplay";
import ProductPage from "./productPage";
import App from "./App";
import ShoppingPage from "./shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/productDisplay" element={<ShoppingPage/>}/>
                <Route path="/productPage" element={<ProductPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;