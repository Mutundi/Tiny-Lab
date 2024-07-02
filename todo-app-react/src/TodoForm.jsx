import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
      className="border p-2 w-full text-center"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Add an item" 
      />
      <button type="submit" className="mt-4 p-2 px-10 bg-blue-500 text-white"> 
        Add
      </button>
    </form>
  )
}

export default TodoForm