import React from 'react'

const List = ({items}) => {
  return (
    <ul>
        {items.map((item, index) => 
        <li key={index}>
            <span>{item}</span>
        </li>
        )}
    </ul>
  )
}

export default List