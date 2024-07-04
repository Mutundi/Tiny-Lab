import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <div className="space-x-4">
            <input 
            className="bg-blue-400 rounded-md"
            type="text"
            value={value}
            onChange={handleChange}
            />
            <button type="submit" className="bg-green-200 pl-4 pr-4">Add</button>
        </div>
    </form>
  )
}

export default TodoForm