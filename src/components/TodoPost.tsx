import { useState, type ReactElement } from "react";

interface IPostProps {
    todoText: string,
    authorName: string,
    id: number,
    timeStamp: string;
    onRemove: (id: number) => void
}

export const TodoPost = ({todoText, authorName, id, timeStamp, onRemove}: IPostProps): ReactElement => {
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
                <section className="author-and-timestamp">
                    <div className="todo-author">
                        <p>{authorName}</p>
                    </div>
                    <div className="timeStamp">
                        <p>{timeStamp}</p>
                    </div>
                </section>
            </section>
        <span className="material-symbols-outlined" onClick={handleRemove}>delete</span>
    </article>
    )
};
