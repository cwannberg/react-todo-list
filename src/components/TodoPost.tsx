import { useState, type ReactElement } from "react";

interface IPostProps {
    todoText: string,
    authorName: string,
    id: number,
    onRemove: (id: number) => void
}

export const TodoPost = ({todoText, authorName, id, onRemove}: IPostProps): ReactElement => {
    const [finished, setFinished] = useState(false);
    
    const handleRemove = () => {
        onRemove(id);
    }
    const handleFinished = () => {
        setFinished(!finished);
    }
    
    return (
    <article className="todo-post">
        <span className="material-symbols-outlined" onClick={handleFinished}>
            {finished ? "check_circle" : "radio_button_unchecked"}</span>
            <section className="text-wrapper">
                <div className="todo-text">
                    <p>{todoText}</p>
                </div>
                <div className="todo-author">
                    <p>{authorName}</p>
                </div>
            </section>
        <span className="material-symbols-outlined" onClick={handleRemove}>delete</span>
    </article>
    )
};
