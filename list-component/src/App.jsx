import React, { useState } from 'react'
import './App.css'
import List from './List.jsx'

const App = () => {

  const items = ['Levi', 'Mutundi', 'Amos', 'Motegandi', 'Yoel', 'Bhoke', 'Ben'];

  return (
    <div className="bg-yellow-200 p-8 rounded-lg">
      <h3 className="font-bold font-Arial">List Items:</h3>
      <List items={items} />
    </div>
  )
}

export default App