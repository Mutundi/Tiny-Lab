import React,{ useState } from 'react'
import './App.css'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-yellow-100 shadow-md p-8 rounded-lg font-roboto">
      <h3 className="mb-2">Todo App</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
