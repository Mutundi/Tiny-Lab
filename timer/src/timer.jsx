import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [inputTime, setInputTime] = useState('');

    useEffect(() => {
        let interval;
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isRunning, time]);


    const handleStart = () => {
        if (time > 0) {
            setIsRunning(true);
        }
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setInputTime('');
    };

    const handleInputChange = (e) => {
        setInputTime(e.target.value);
    };

    const handleSetTime = () => {
        const newTime = parseInt(inputTime);
        if(!isNaN(newTime) && newTime > 0) {
            setTime(newTime);
            setInputTime('');
        }
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded p-10">
        <div className="bg-white rounded-lg p-8 shadow-lg">
            <h1 className="text-center text-3xl font-bold mb-6">Timer</h1>
            <div className="text-center text-5xl mb-8 font-mono">{formatTime(time)}</div>
        </div>
        <div className="flex mb-4 mt-4">
            <input 
            type="number"
            onChange={handleInputChange}
            value={inputTime}
            placeholder="Enter Seconds"
            className="flex-grow mr-2 p-2 border rounded text-center"
            />
            <button
            onClick={handleSetTime}
            className="bg-blue-500 text-white px-4 rounded focus:outline-none hover:bg-blue-600"
            >Set</button>
        </div>
        <div className="flex justify-center space-x-4">
            <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
            >
                Start
            </button>
            <button
            onClick={handlePause}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none"
            >
                Pause
            </button>
            <button
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
            >
                Reset
            </button>
        </div>
    </div>
  )
}

export default Timer