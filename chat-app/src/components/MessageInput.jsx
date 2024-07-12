import React, {useState} from 'react'

const MessageInput = ({sendMessage}) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            sendMessage(text);
            setText('');
        };
    };

    const handleChange = (e) => {
        setText(e.target.value)
    };

  return (
   <form onSubmit={handleSubmit} className="p-10 bg-gray-300 border-t-4 rounded">
    <div className="flex gap-3">
        <input 
        type="text"
        value={text}
        onChange={handleChange}
        className="flex-1 border rounded-lg p-2 text-center placeholder:italic placeholder:text-slate-500 focus:outline-none focus:ring"
        placeholder="Type a message..."
        />

        <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 focus:outline-none hover:bg-blue-700 transition duration-300"
        >Send</button>
    </div>
   </form>
  )
}

export default MessageInput