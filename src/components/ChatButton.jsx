import React from "react";
import "./ChatButton.css";

function ChatButton({ onClick }) {
  return (
    <button className="chat-fab" onClick={onClick} aria-label="Open chat">
      <i className="fas fa-robot"></i>
    </button>
  );
}

export default ChatButton;