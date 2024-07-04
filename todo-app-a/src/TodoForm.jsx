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
        setValue(e.target.value);
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
        <input
        className="bg-blue-200 text-cente mr-2 rounded-md text-center"
        type="text"
        value={value}
        onChange={handleChange}
        />
        <button type="submit" className="rounded-md pr-6 pl-6 bg-green-200">Add</button>
    </form>
  )
}

export default TodoForm