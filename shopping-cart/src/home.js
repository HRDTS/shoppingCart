import React from "react";
import { Link } from "react-router-dom";


function HomePage (props) {

    return <div className="homePage">
        <div className="homeInner">
            <h1 className="homeFirstText">Are you ready for the future of cars?</h1>
            <h2 className="homeSecondText">Available now:  &nbsp; <div className="cyberTruck">Tesla Cybertruck</div></h2>
            <Link to="/productDisplay" >
            <button className="homeShopButton"> SHOP </button>
            </Link >
        </div>
    </div>
}

export default HomePage;