import React, {useState} from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleNumber = (number) => {
        if (display === '0') {
            setDisplay(number);
        }else {
            setDisplay(display + number);
        }

        setEquation(equation + number);
    };

    const handleOperator = (operator) => {
        setDisplay('0');
        setEquation(equation + " " + operator + " ");
    };

    const handleEqual = () => {
        try {
            const result = eval(equation);
            setDisplay(result.toString());
            setEquation('');
        } catch (error) {
            setDisplay('Error');
            setDisplay('');
        }
    };
    const handleClear = () => {
        setDisplay('0');
        setEquation('');
    };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-10 rounded-lg">
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4 p-2 bg-gray-200 rounded">
                <div className="text-right text-xl">{display}</div>
                <div className="text-right text-sm text-gray-600">{equation}</div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                    <button
                    key={btn}
                    onClick={() => {
                        if (btn === '=') handleEqual();
                        else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn);
                        else handleNumber(btn);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded border border-blue-500 hover:border-blue-600 focus:outline-none"
                    >
                        {btn}
                    </button>
                ))}
                <button
                onClick={handleClear}
                className="col-span-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 border-2 border-red-500 hover:border-red-600 focus:outline-none"
                >
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default Calculator