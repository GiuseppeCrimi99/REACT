// import { Age } from "./Age"

export function Welcome({ name, age }) {
  return (
    <div>
      {name === "John" && <p>Welcome {name}</p>}
      {!!age && age > 18 && age && age < 65 && <p>You are {age} years old</p>}
      {age && age < 18 && <p>You are very young</p>}

      
    </div>
  );
}
