import { useEffect, useState } from "react"

const GithubUserList=()=>{
const [dataList,setDataList]=useState([])
const[error,setError]=useState(false)
const[loading,setLoading]=useState(false)

const fetchGithubUser1=async()=>{
    setError(null)
    setLoading(true)
    try {
       const response=await fetch("https://api.github.com/users") ;
        const responseJSON=await response.json();
        setDataList(responseJSON)
    } catch (error) {
        setError(error)
        setDataList([])
    }finally{
        setLoading(false)
    }
}
useEffect(()=>{
    fetchGithubUser1()
},[])

return(
    <div>
      
      <h2>GitHub User List</h2>

      {loading && <p>Loading...</p>}

      {error && <p>There has been an error!!</p>}
      <ul>
        {dataList.map((user) => (
          <li key={user.id}>
            <a href={user.html_url}>{user.login}</a>
            {/* <img src={user.avatar_url}/> */}
          </li>
        ))}
      </ul>
    </div>
    
)
}
export default GithubUserList
