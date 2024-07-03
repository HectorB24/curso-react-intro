import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButtom/>

    </div>
  );
}

function TodoCounter(){
  return(
    <h1>
      Has completado 3 de 5 TODOS
    </h1>
  );
}

function TodoItem(){
  return (
    <li>
      <span>V</span>
      <p>LLorar con la LLorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
