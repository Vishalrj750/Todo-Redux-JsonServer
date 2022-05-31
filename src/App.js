import './App.css';
import Todo from './Components/Todo';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
