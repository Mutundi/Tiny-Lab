import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

  return (
    <form onSubmit={handleSubmit} className="space-x-4 font-roboto">
        <input
        className="bg-blue-200 rounded-md" 
        type="text"
        value={value}
        onChange={handleChange}
        />
        <button type="submit" className="bg-blue-200 pr-6 pl-6" >Add</button>
    </form>
  )
}

export default TodoForm