import { useState } from "react";

const useInput = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, checked, type, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(inputValues);
    
  };

  return {
   
    onInputChange:handleInputChange,
    onSubmitForm:handleSubmitForm,
  };
};

export default useInput;