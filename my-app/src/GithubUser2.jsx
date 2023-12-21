import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUsers2 = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    input1: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setList([...list, input]);
    setInput({
      input1: "",
    });
  };

  console.log(list);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input1"
          value={input.input1}
          onChange={handleChange}
        />
        <button type="submit">Click Me!</button>
      </form>
      <ul>
        {list.map((element, index) => (
          <li key={index}>{<GithubUser username={element.input1} />}</li>
        ))}
      </ul>
    </div>
  );
};
export default GithubUsers2;
