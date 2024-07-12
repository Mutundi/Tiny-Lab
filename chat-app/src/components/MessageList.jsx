import React from 'react'

const MessageList = ({messages}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
            <div key={index} className="mb-4">
                <div className="font-bold">{message.user}</div>
                <div className="bg-gray-200 rounded-lg p-2">{message.text}</div>
                <div className="text-xs text-gray-500">{new Date(message.timestamp).toLocaleString()}</div>
            </div>
        ))}
    </div>
  )
}

export default MessageList