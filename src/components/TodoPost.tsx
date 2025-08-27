import type { ReactElement } from "react";

interface IPostProps {
    todoText: string,
    authorName: string,
    id: number,
    onRemove: (id: number) => void
}

export const TodoPost = ({todoText, authorName, id, onRemove}: IPostProps): ReactElement => {
    const handleRemove = () => {
        onRemove(id);
        alert("Remove!");
    }
    const handleFinished = () => {
        //byta ikonen
        alert("Finished!");
    }
    
    return (
    <article className="todo-post">
        <button onClick={handleFinished}>O</button>
            <section className="text-wrapper">
                <div className="todo-text">
                    <p>{todoText}</p>
                </div>
                <div className="todo-author">
                    <p>{authorName}</p>
                </div>
            </section>
        <button onClick={handleRemove}>X</button>
    </article>
    )
};
