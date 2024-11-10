// src/components/MyAi.jsx
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; // Optional icon for the chatbot
import './MyAi.css'; // We'll add some custom styling

const MyAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // A simple function to simulate an AI response
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: 'I am here to help! How can I assist you today?' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="ai-chat-container">
      <div className="chat-header">
        <FaRobot size={30} />
        <span>My AI Chatbot</span>
      </div>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'ai' ? 'ai' : 'user'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MyAi;
