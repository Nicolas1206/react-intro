import { useRef } from "react";

export const FormTodo =({inputValue, handleInputChange}) => {
    const inputRef = useRef();

    const clickHandler = () => {
        const inputElement = inputRef.current;
    
        if(inputElement.value.trim() !== "") {
          // Add new todo to current todos
          const newTodos = [...handleInputChange, {todoName: inputElement.value, todoStatut: false}];
          inputValue(newTodos);
    
          // Clear input field
          inputElement.value = '';
        }
        console.log(inputElement.value); 
    }

    return (
        <>
            <div id="add">
                <input ref={inputRef} type="text" id="addToList" placeholder="Write Something"/>
                <button onClick={clickHandler} id="addToList" type="submit">Add something</button>
            </div>
        </>
    )
}
