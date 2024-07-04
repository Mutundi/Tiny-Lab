import React, { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList'

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
  };

  return (
    <div className="bg-green-300 shadow-lg p-8 rounded-lg">
      <h3 className="text-center mb-3">Todo App</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App