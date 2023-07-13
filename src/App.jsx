import { useState } from 'react'
import {FormTodo} from './component/FormTodo'
import {Title} from './component/Title'
import {TodoList} from './component/TodoList'


export const App = () => {
  const initialTodos = [{todoName : "My first todo",todoStatut: false}, {todoName : "My second todo",todoStatut: false}];
  const [todo, setTodo] = useState(initialTodos);
  return (
    <>
     <Title />
     <FormTodo inputValue={setTodo} handleInputChange={todo}/>
     <TodoList todos={todo} setTodos={setTodo} />
    </>
  );
}


