import React from "react";
import useInput from "./useInput";

const Input = () => {
  const { onInputChange, onSubmitForm } = useInput();

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        name="username"
        value={onInputChange.username}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        value={onInputChange.password}
        onChange={onInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;