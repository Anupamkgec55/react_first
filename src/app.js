import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Header from "./components/Header";


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