import React from 'react'

const TodoList = ({todos, toggleComplete, deleteTodo}) => {

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="flex items-center mb-1" >
          <input
          className="mr-2" 
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
          />
          <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
          <button className="border px-6 m-2 bg-red-400 text-white" onClick={() => deleteTodo(index)} >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList