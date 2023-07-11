import React, { useState } from "react";
export const Todo = () => {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
    const [checkedTodos, setCheckedTodos] = useState(
        new Array(initialTodos.length).fill(false)
    )

    const handleCheckboxChange = (index) => {
        const newCheckedTodos = [...checkedTodos]
        newCheckedTodos[index] = !newCheckedTodos[index];
        setCheckedTodos(newCheckedTodos);
    }
    return (
        <>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input 
                    type="checkbox"
                    checked={checkedTodos[index]}
                    onChange={()=> handleCheckboxChange(index)} 
                    /> {" "}
                    {todo}
                </li>
            ))}
        </ul>
        </>
    )
} 


/**import React, { useState } from "react";

export default function TodoList() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" /> {todo}
        </li>
      ))}
    </ul>
  );
}**/