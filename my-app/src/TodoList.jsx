import React, { useState } from "react";

const TodoList = () => {

    const [todos, setTodos]= useState([])            //usestate per la todolist

    const [todoInput, setTodoInput]= useState("")    //usestate per il valore dell'input


    const handleTodoList=()=>{
        setTodos([                      //evento per l'aggiunta di una nuova todolist
            ...todos,
            todoInput
        ])
        setTodoInput("")                    //resetta il valore dopo l'aggiunta della todolist
    }
    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
      };

    const handleReset = () => {
        setTodos([]);                        //resetta l'array todos
        setTodoInput("");                    // resetta l'input
      };
      
      const handleResetList=()=>{
        setTodos([])
      }

  
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}<button onClick={handleResetList}>Remove List</button></li>
        ))}
      </ul>
      <input name="input" value={todoInput} 
      onChange={handleInputChange}/>     
      <button onClick={handleTodoList}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TodoList;