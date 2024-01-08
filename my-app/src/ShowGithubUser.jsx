import React from 'react';
import GithubUser from './GithubUser';
import { useParams } from 'react-router-dom';
const ShowGithubUser=()=>{
    const { username } = useParams();
    return(
        <div>
        <h2>Show Github User</h2>
        <GithubUser username={"GiuseppeCrimi99"} />
        </div>
    )
}
export default ShowGithubUser