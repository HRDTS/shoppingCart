import React from "react";


function HomePage (props) {

    return <div className="homePage">
        <div className="homeInner">
            <h1 className="homeFirstText">Are you ready for the future of cars?</h1>
            <h2 className="homeSecondText">Available now:  &nbsp; <div className="cyberTruck">Tesla Cybertruck</div></h2>
            <button className="homeShopButton">SHOP</button>
        </div>
    </div>
}

export default HomePage;