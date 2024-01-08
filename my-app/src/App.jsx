import React from "react";
import {Routes,Route} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser";
import Home from "./Home";
export function App (){
  


    return(
        <div>
          <Routes>
            <Route path="/"element={<Home/>}/>
          <Route path="/:username" element={<ShowGithubUser />} />
          </Routes>
          
           {/* ---> /:username per vedere il nome utente di github */}
        </div>
    )
}