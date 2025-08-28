import { useState, type ReactElement } from "react";
import { TodoPost } from "./TodoPost";
import type { ITodo } from "../App";

interface TodoListProps {
    todos: ITodo[];
    onRemove: (id: number) => void;
}

export const TodoList = ({ todos, onRemove}: TodoListProps): ReactElement => {
    return (
        <section className="todo-list">
        { 
        todos.map((todo) =>(
            <TodoPost key={todo.id} id={todo.id} todoText= {todo.todoText} authorName={todo.authorName} timeStamp={todo.timeStamp} onRemove={onRemove}/>
        ))} 
        </section>
    )
}
