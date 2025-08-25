import './assets/App.css'
import { TodoPost } from './components/TodoPost'

function App() {

  return (
    <>
      <main>
        <header>
          <h1>Todo</h1>
        </header>      
        <section className='content-wrapper'>
          <section className="todo-list">
              <TodoPost/>
          </section>
          <section className="todo-form">
            <form>
              <div className="todo-input">
                <input type="text" placeholder="Skriv vad du ska göra"></input>
              </div>
               <div className="name-input">
                <input type="text" placeholder="Namn"></input>
              </div>
            </form>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
