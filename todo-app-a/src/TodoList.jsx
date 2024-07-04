import React from 'react'

const TodoList = ({todos, toggleComplete, deleteTodo}) => {
  return (
    <ul>
        {todos.map((todo, index) => 
        <li key={index} className="flex justify-center gap-4 m-2">
            <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(index)} className="bg-green-200 pr-4 pl-4 ml-6" >Delete</button>
        </li>
        )}
    </ul>
  )
}

export default TodoList