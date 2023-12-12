export function UncontrolledForm() {
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
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

// Tentare di accedere ai valori del modulo utilizzando l' FormDataAPI. Quali sono i vantaggi? Quali sono gli svantaggi?
// I vantaggi sono che il codice è molto piu leggibile, estraiamo i valori del form in modo piu diretto , sembra che ha un utilizzo più semplice.
// Gli svantaggi è che non è supportato nei browser più vecchi e  non ha tutte le forme di validazione