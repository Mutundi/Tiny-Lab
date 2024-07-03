import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

  return (
    <div className="bg-yellow-300 rounded-lg p-6 shadow-lg text-center space-y-4" >
        <h1 className="" >Counter App</h1>
        <div className="bg-blue-300 p-3 rounded-md w-1/2 ml-12" >{count}</div>
        <div className="space-x-2">
            <button onClick={decrement} className="p-1 bg-blue-100" >Decrement</button>
            <button onClick={increment} className="p-1 bg-blue-100">Increment</button>
        </div>
    </div>
  )
}

export default Counter