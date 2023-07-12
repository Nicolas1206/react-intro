import { useState } from "react"; 

export const Todo = () => {
    // J'initialise un tableau d'objet 
  const initialTodos = [{todoName : "My first todo",todoStatut: false}, {todoName : "My second todo",todoStatut: false} ];
    // j'initialise mon tableau dans mon useState
  const [todos, setTodos] = useState(initialTodos);
    // fonction pour prendre en main le changement d'index des TODO
  const handleTodoChange = (index) => {
    // Copie en mémoire(DOM) de notre tableau contenant nos todos
    const updatedTodos = [...todos];
    // condition pour savoir si l'index de todoStatut est coché ou non 
    updatedTodos[index].todoStatut = !updatedTodos[index].todoStatut
    // Appliquer la variable updateedTodos dans notre useState setTodos
    // Afin de reconstruire notre stateTodo et le rafraichir dynamiquement
    setTodos(updatedTodos)
    console.log(updatedTodos[index].todoStatut)
    console.log(todos)
    
  }
  return (
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
        <input
          type="checkbox"
          checked={todo.todoStatut}
          onChange={()=>handleTodoChange(index)}
        />
        {todo.todoName}
      </li>
      ))}
    </ul>
  );
}