import React from 'react'

const TodoList = ({todos, toggleComplete, deleteTodo}) => {
  return (
  <ul className="space-x-3">
    {todos.map((todo, index) => 
    <li key={index} className='flex gap-4'>
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
        />
        <span>{todo.text}</span>
        <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
    )}
  </ul>
)
}

export default TodoList