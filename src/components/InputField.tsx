import { useState, type ReactElement } from "react"
import '../assets/inputField.css'
import type { ITodo } from "../App";

interface InputFieldProps {
    addToList: (todo: ITodo) => void; 
}

export const InputField = ({addToList}: InputFieldProps): ReactElement => {
    
    const [authorName, setAuthorName] = useState("");
    const [todoText, setTodoText] = useState("");
    
    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault(); 
      if (!todoText || !authorName) return;

        const newTodo: ITodo = {
            id: Date.now(),
            todoText,
            authorName,
            timeStamp: new Date().toLocaleString()
        }
        addToList(newTodo);
        setTodoText("");
        setAuthorName("");
    }

    return (
    <form onSubmit={handleOnSubmit}>
        <div className="todo-input">
            <input value={todoText} type="text" placeholder="Skriv vad du ska göra" onChange={(e) => setTodoText(e.target.value)}/>
        </div>
        <div className="name-input">
            <input value={authorName} type="text" placeholder="Namn" onChange={(e) => setAuthorName(e.target.value)}/>
        </div>
        <button type="submit" className="material-symbols-outlined">add_circle</button>
    </form>
    )
}


