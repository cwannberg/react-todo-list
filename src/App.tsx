import { useState } from 'react';
import './assets/App.css'
import { InputField } from './components/InputField'
import { TodoList } from './components/TodoList'

export interface ITodo {
  id: number;
  todoText: string;
  authorName: string;
  timeStamp: string;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addToList = (todo: ITodo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <main>
        <header>
          <h1>Todo</h1>
        </header>      
        <section className='content-wrapper'>
            <TodoList todos={todos} onRemove={removeTodo}/>
          <section className="todo-form">
            <InputField addToList={addToList}/>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
