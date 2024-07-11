import React, {useState} from 'react'

const WeatherForm = ({setLocation}) => {

    const [input, setInput] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(input);
        setInput('');
     };

     const handleChange = (e) => {
        setInput(e.target.value);
     };

  return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input 
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter city name"
            className="text-center px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            type="submit"
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-r-lg focus:outline-none hover:bg-blue-600 focus:ring-2 focus:bg-blue-500"
            >
                Get Weather
            </button>
        </form>
  )
}

export default WeatherForm;