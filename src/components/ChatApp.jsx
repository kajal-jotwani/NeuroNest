import { useState } from 'react';
import { FaUserCircle, FaRobot } from 'react-icons/fa';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import './ChatApp.css'; // Import your custom CSS for styling

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to handle sending messages
  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      try {
        // Send the user input to the Gemini model API
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCizGyf52UdXDqBGrm7UAgpPKwh7h3eIJE',
          {
            contents: [
              {
                parts: [
                  {
                    text: input,
                  },
                ],
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        // Check if the response contains candidates and extract the text
        if (response.data.candidates && response.data.candidates.length > 0) {
          const aiResponse = response.data.candidates[0].content.parts[0].text.trim(); // Get AI response

          const aiMessage = { text: aiResponse, sender: 'ai' };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } else {
          const aiMessage = { text: 'Sorry, I could not process your request. Please try again later.', sender: 'ai' };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
        }
      } catch (error) {
        console.error('Error:', error);  // Log error for debugging
        const aiMessage = { text: 'Sorry, I could not process your request. Please try again later.', sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      }

      setInput(''); // Clear input field after sending
    }
  };

  return (
    <div className="games-dashboard">
    <div className="chat-container">
      <div className="chat-header">
        <h3>AI Powered Chat</h3>
      </div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
          >
            <div className="message-icon">
              {message.sender === 'user' ? <FaUserCircle color='white' /> : <FaRobot />}
            </div>
            <div className="message-text">
              <ReactMarkdown>{message.text}</ReactMarkdown> {/* Render markdown as React components */}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default ChatApp;
