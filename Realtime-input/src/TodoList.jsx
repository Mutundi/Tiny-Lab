import React from 'react'

const TodoList = ({todos, toggleComplete, deleteTodo}) => {

  return (
    <ul>
        {todos.map((todo, index) => (
            <li key={index} className="flex gap-4">
                <input
                className="text-center" 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
                />
                <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
        ))}
    </ul>
  );
}

export default TodoList