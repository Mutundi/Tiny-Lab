import React from 'react'
import './App.css'
import Toggle from './toggle.jsx'

const App = () => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-8 space-y-4">
      <h2>Toggle Switch</h2>
      <Toggle initial={true} />
    </div>
  )
}

export default App