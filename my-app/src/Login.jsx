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
                const checked=event.target.checked;
                const type=event.target.type


                // vedo che si puoi mettere anche cosi e sembra piu pulito, potresti darmi conferma?
                // const { name, value, type, checked } = event.target;

               
                

                setData((data) => ({
                    ...data,
                    [name]: type === "checkbox" ? checked : value,
                  }));
                }
              

                            
                function handleLogin() {
                    onLogin(data);
                  }

                  function handleResetForm(){
                    setData(createData())
                  }
                  function handleLoginSubmit(event){
                    event.preventDefault()
                  }
    return(
        <>
             <form onSubmit={handleLoginSubmit}>
            <input name="username"value={data.username}onChange={handleImput} />
            <input name="password"type="password"value={data.password}onChange={handleImput} />
            <input name="checkbox"type="checkbox" value={data.checkbox}onChange={handleImput}/>
            <button type="button"onClick={handleLogin} disabled={!data.username || !data.password}>Login!</button>
            <button type="button"onClick={handleResetForm}>Reset</button>
            </form>
        </>
    )
}