import { useEffect , useState } from "react";   

export function Clock(){

    const[date, setDate]= useState(new Date())

    useEffect(()=>{

        console.log("update time");
        const id= setInterval(() => {
            setDate(new Date())
        }, 1000);
        return(()=>{
            clearInterval(id)
        })


    },[])


    return(
        <div>
            <p> the current time is : {date.toLocaleTimeString()}</p>
        </div>
    )



}