import { useEffect, useState } from "react"

 const GithubUser=({username})=>{
    const [data,setData]=useState(null)
    const [error,setError]=useState(false)
    const fetchGithubUser=async(username)=>{
        try {
        const response= await fetch(`https://api.github.com/users/${username}`)
        const responseJSON= await response.json()
        setData(responseJSON)
        } catch (error) {
            setError(error)
            setData(null)
        }
    
    
    }


        useEffect(()=>{
            fetchGithubUser(username)
        },[username])




    return(
        <div>
            {data&&<h1>{data.name}</h1>}
            {data&&<p>{data.login}</p>}
            {data&&<img src={data.avatar_url}></img>}
        </div>
    )
 }

 export default GithubUser