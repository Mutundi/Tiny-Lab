import React, {useState} from 'react'

const toggle = ({initial = false}) => {

    const [isOn, setIsOn] = useState(initial);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
  return (
    <div>
        <button onClick={toggleSwitch} className="px-4 bg-green-300" >{isOn ? "ON" : "OFF"}</button>
    </div>
  )
}

export default toggle