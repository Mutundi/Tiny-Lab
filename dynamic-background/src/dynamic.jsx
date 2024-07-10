import React, {useState} from 'react'

const DynamicBackground = () => {

    const [bgColor, setBgColor] = useState('bg-blue-500');

    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500'];

    const changeBackground = () => {
        const currentIndex = colors.indexOf(bgColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setBgColor(colors[nextIndex])
    };

  return (
    <div
    onClick={changeBackground}
    className={`flex justify-center items-center w-60 h-40 ${bgColor} transition-colors duration-300 cursor-pointer rounded-lg shadow-lg`}
    >
        <p
        className="text-white text-center pt-25 text-xl"
        >Click Me!</p>
    </div>
  )
}

export default DynamicBackground;