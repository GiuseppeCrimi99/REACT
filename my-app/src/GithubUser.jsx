import { useEffect, useState } from "react"
import useGitHubUser from "./useGithubUser"

 const GithubUser=({username})=>{
  const{data,error}= useGitHubUser(username)

    return(
        <div>
            {error&& <h1>There has been an error!!</h1>}
            {data&&<h1>{data.name}</h1>}
            {data&&<p>{data.login}</p>}
            {data&&<img src={data.avatar_url}></img>}
        </div>
    )
 }

 export default GithubUser