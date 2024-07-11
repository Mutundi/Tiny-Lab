import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'

const App = () => {
  const items = ['Wisdom', 'Knowledge', 'Suffering', 'Work', 'Misery', 'Tough'];

  return (
    <div className="container mx-auto p-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Items Search</h1>
      <SearchBar items={items} />
    </div>
  )
}

export default App;


