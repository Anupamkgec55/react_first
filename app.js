import React from "react";
import ReactDOM from "react-dom/client";
import img1 from "./src/images/download.jpg"
import { render } from "react-dom";

const u=100;
// React element
const element=(
    <div>
    <img src={img1}/>
    {u}
    </div>   
    
);
const x=ReactDOM.createRoot(document.getElementById("divi"));
x.render(element);

// React componets
const Compo2=()=>(<img src={img1}/>);
const Compo=()=> (
<div>
    <h1 className="h1_change">h1 changed</h1>
    {u*2}  
    {element}
    {Compo2()}
</div>
);
const y=ReactDOM.createRoot(document.getElementById("fisrt_h1"));

y.render(<Compo/>);