import React from "react";
import { Route,Routes } from "react-router-dom";
import { Hello } from "./Hello";
import Link1 from "./Link1";
import Link2 from "./Link2";
import Link3 from "./Link3";


export function App (){
    return(
        <div>
        <Routes>
           <Route path="/"element={<Hello />}/>
           <Route path="link1"element={<Link1/>}/>
           <Route path="link2"element={<Link2/>}/>
           <Route path="link3"element={<Link3/>}/>
        </Routes>
             
            
           
        </div>
    )
}