import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
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

      {/* <CreateTodoButtom/> */}

    </div>
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
