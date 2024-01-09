import React from "react";
import {Routes,Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser";
import Home from "./Home";
import GithubUserList from "./GitHubUserList";
export function App (){
  


  return (
    <div>
      <h2>
        <Link to="/">Home</Link>
      </h2>
       <h2>
        <Link to="/users">Users</Link>
       </h2>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<GithubUserList />} />
        <Route path="/:id" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
};