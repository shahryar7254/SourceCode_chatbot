import React, { useState } from "react";
import { getAIResponse } from "./api";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Show user message
    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);

    // Get AI response
    const reply = await getAIResponse(input);

    // Show AI reply
    setMessages([...newMessages, { type: "bot", text: reply }]);
    setInput("");
  };

  return (
    <div className="chat-widget">
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={m.type === "user" ? "user-msg" : "bot-msg"}>
            {m.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ask about the website..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatBot;
