import { useState } from "react"


    function createData(){
        return {
            username:"",
            password:"",
            checkbox: false

        }
    }

        export function Login(onLogin){
            const [data, setData]=useState(createData())
             
            function handleImput(event){
                const name= event.target.name;
                const value= event.target.value;

               
                

                setData((data) => ({
                    ...data,
                    [name]: value,
                  }));
                }
              

                            
                function isLoginDisabled() {
                    return !data.username || !data.password;
                  }

             

    return(
        <>
            <input name="username"value={data.username}onChange={handleImput} />
            <input name="password"type="password"value={data.password}onChange={handleImput} />
            <input name="checkbox"type="checkbox" value={data.checkbox}onChange={handleImput}/>
            <button disabled={isLoginDisabled()}>Login!</button>
        
        </>
    )
}