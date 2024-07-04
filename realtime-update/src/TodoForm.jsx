import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

  return (
    <form onSubmit={handleSubmit} className="space-x-4"> 
        <input
        className="bg-blue-100 rounded-md"
        type="text"
        value={value}
        onChange={handleChange}
        />
        <button type="submit" className="bg-green-100 pr-6 pl-6">Add</button>
    </form>
  )
}

export default TodoForm