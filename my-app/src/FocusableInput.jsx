import { useEffect, useRef } from "react";

export function FocusableInput() {
  
    const inputRef=useRef(null)
    const mountedRef= useRef(false)
    useEffect(()=>{
      if(!mountedRef.current){
        mountedRef.current=true
        console.log("E' stato montato per la prima volta");
      }else{
        console.log("Montato di nuovo per il debug")
      }
      inputRef.current?.focus()
    },[])





  function handleFormSubmit(event) {
    event.preventDefault();

    

    const formData= new FormData(event.target)

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session:  formData.get("session"),         //on or null va bene comunque? 
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input ref={inputRef} name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

