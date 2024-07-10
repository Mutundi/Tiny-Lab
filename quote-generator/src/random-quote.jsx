import React, {useState, useEffect} from 'react';

const quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {text: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    {text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    {text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"}
];

const RandomQuote = () => {

    const [quote, setQuote] = useState(null);

    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    if (!quote) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center rounded p-10">
        <div className="max-w-xl bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
                <h1 className="text-indigo-500 text-2xl font-semibold mb-4">Random Quote Generator</h1>
                <p className="text-gray-700 text-lg mb-4">"{quote.text}"</p>
                <p className="text-gray-500 text-right">- {quote.author}</p>
                <button
                onClick={getRandomQuote}
                className="bg-indigo-500 mt-6 text-white hover:bg-indigo-600 font-bold py-2 px-4 focus:outline-none"
                >New Quote</button>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote;