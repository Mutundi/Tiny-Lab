import React, {useState} from 'react'
import './App.css'
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
    <div className="bg-gray-200 shadow-lg rounded-lg p-5">
      <h1 className="mb-2">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App