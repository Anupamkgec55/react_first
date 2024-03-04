import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
            <div className="logo_main">
                <img className="logo"src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/iuqkzkwpd1vpyxc5zjvh"/>
            </div>
            <div className="nav_bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Offer</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Restuarent_card=()=>{
    return(
    <div className="res_card">
        <div className="rest_logo">
            <img className="res_image"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e"></img>
        </div>
        <div className="res_desc">
          <p>Pizza Hut</p>  
          <p>4.1 Star 30-35 min</p>  
          <p>Pizzas</p>  
          <p>Asansol</p>  
        </div>
    </div>
    )
}
const Body=()=>{
    return(
    <div className="body">
        <div className="searchbar">
            <input type="search"></input>
        </div>
        <div className="Restuarent_block">
            <Restuarent_card/>
            <Restuarent_card/>
            <Restuarent_card/>
            <Restuarent_card/>
            <Restuarent_card/>
            <Restuarent_card/>
        </div>
    </div>
    )
}
const AppLayout=()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const rend=ReactDOM.createRoot(document.getElementById('app'));
rend.render(<AppLayout/>);