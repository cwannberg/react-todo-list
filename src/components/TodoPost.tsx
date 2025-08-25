import type { ReactElement } from "react";

export const TodoPost = (): ReactElement => {
    return (
    <article className="todo-post">
        <button>O</button>
            <section className="text-wrapper">
                <div className="todo-text">
                    <p>Sak att göra</p>
                </div>
                <div className="todo-author">
                    <p>Cilla</p>
                </div>
            </section>
        <button>X</button>
    </article>
    )
};