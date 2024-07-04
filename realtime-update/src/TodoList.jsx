import React from 'react'

const TodoList = ({todos, toggleComplete, deleteTodo}) => {
  return (
    <ul className="">
        {todos.map((todo, index) => (
            <li key={index} className="list-none flex gap-2">
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
            />
            <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)} className="pr-4 pl-4 bg-green-100 mt-1">Delete</button>
        </li>))}
    </ul>
  )
}

export default TodoList