import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const socket = io('http://localhost:3000');

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);

   useEffect(() => {
    socket.on('connect', () => {
        console.log('Connected to server');
      });

    socket.on('message', (message) => {
        console.log('Received message:', message);
        setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
        socket.off('message');
    }
   }, []);

   const sendMessage = (text) => {
    const message = {text, user: 'Me', timestamp: new Date().toISOString()};
    console.log('Sending message:', message);
    socket.emit('message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
   };

  return (
    <div className="flex flex-col h-screen">
        <MessageList messages={messages} />
        <MessageInput sendMessage={sendMessage} />
    </div>
  )
}

export default ChatRoom