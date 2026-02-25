import React, { useState, useEffect, useRef } from "react";
import "./ChatSidebar.css";
import { extractPageContent } from "../utils/extractPageContent";
import { askAI } from "../utils/aiService";

function ChatSidebar({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hi! Ask me anything about this page." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userQuestion = input;
  setMessages(prev => [...prev, { sender: "user", text: userQuestion }]);
  setInput("");
  setLoading(true);

  try {
    const pageContext = extractPageContent();
    const aiReply = await askAI(pageContext, userQuestion);

    setMessages(prev => [...prev, { sender: "ai", text: aiReply }]);
  } catch (error) {
    setMessages(prev => [
      ...prev,
      { sender: "ai", text: "I'm having trouble connecting right now. Please try again." }
    ]);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className={`chat-sidebar ${isOpen ? "open" : ""}`}>
      
      {/* Header */}
      <div className="chat-header">
        <h3>Page Assistant</h3>
        <button onClick={onClose} className="close-btn">×</button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message ai thinking">Thinking...</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
}

export default ChatSidebar;