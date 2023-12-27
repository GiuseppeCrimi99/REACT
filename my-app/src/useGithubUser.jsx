import { useEffect, useState } from "react"

const useGitHubUser=(username)=>{
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

        return { data, error }

}
export default useGitHubUser