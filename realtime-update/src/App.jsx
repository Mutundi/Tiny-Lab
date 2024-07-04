import './App.css'
import React, {useState} from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'

const App = () => {

  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo([...todos, {text: todo, completed: false}]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div className="bg-gray-300 p-5 rounded-lg">
      <h3 className="mb-3">Real time Update</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
