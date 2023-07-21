import { useState } from 'react';
import {
  InputSection,
  ListSection,
  OutputSection,
} from './components/Sections';
import './App.css';
import { Title } from './components/Atoms';

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const newTodo = (e) => {
    e.preventDefault();
    if (input !== "")
    setTodo([...todo, input]);
    setInput('');
  };

  return (
    <div className="App">
      {/* <ListSection data={todo} /> */}
      {/* <OutputSection /> */}
      <Title text={'1. INPUTS'} size="h2" />
      <form onSubmit={newTodo}>
       <input value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      <button type="submit" >
        +
      </button>
        <ul>
          {todo.map((ele, id) => (
            <li key={id}>{ele}</li>
          ))}
        </ul>
      <InputSection data={todo} />
    </div>
  );
}

export default App;
