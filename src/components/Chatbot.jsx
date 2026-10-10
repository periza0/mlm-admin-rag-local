import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../config";
import logo from "../assets/logo1.png";
import "./Chatbot.css";

const suggestedQuestions = [
  "What membership plans do you offer?",
  "How can I book a badminton court?",
  "What are the badminton coaching details?",
];

const initialMessage = {
  role: "assistant",
  text: "Hi! I can help with membership, court bookings, and badminton coaching.",
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function Chatbot() {
  const { pathname } = useLocation();
  const widgetRef = useRef(null);
  const dragRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(null);

  if (pathname === "/login" || pathname === "/admin") {
    return null;
  }

  const sendQuestion = async (rawQuestion) => {
    const question = rawQuestion.trim();

    if (!question || isLoading) {
      return;
    }

    setIsChatOpen(true);
    setInput("");
    setMessages((current) => [...current, { role: "user", text: question }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "The assistant could not answer just now.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", text: data.answer },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          isError: true,
          text: "I’m sorry, I can’t reach the club assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuestion(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleDragStart = (event) => {
    if (event.button !== 0 || !widgetRef.current) {
      return;
    }

    const rect = widgetRef.current.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDragMove = (event) => {
    const drag = dragRef.current;
    const rect = widgetRef.current?.getBoundingClientRect();

    if (!drag || drag.pointerId !== event.pointerId || !rect) {
      return;
    }

    setPosition({
      x: clamp(event.clientX - drag.offsetX, 8, window.innerWidth - rect.width - 8),
      y: clamp(event.clientY - drag.offsetY, 8, window.innerHeight - rect.height - 8),
    });
  };

  const handleDragEnd = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  };

  const positionStyle = position
    ? { left: position.x, top: position.y, right: "auto", bottom: "auto" }
    : undefined;

  if (isMinimized) {
    return (
      <button
        type="button"
        className="club-chat-launcher"
        aria-label="Open MLM Sports Club assistant"
        style={positionStyle}
        onClick={() => setIsMinimized(false)}
      >
        <img src={logo} alt="" />
        <span className="club-chat-launcher__dot" aria-hidden="true" />
      </button>
    );
  }

  return (
    <aside
      ref={widgetRef}
      className={`club-chat ${isChatOpen ? "club-chat--open" : ""}`}
      style={positionStyle}
      aria-label="MLM Sports Club assistant"
    >
      <div
        className="club-chat__header"
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        onPointerCancel={handleDragEnd}
      >
        <span className="club-chat__drag-mark" aria-hidden="true">⠿</span>
        <div className="club-chat__brand">
          <img src={logo} alt="MLM Sports Club" />
          <span>MLM Sports Club</span>
        </div>
        <button
          type="button"
          className="club-chat__minimize"
          aria-label="Minimize assistant"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => setIsMinimized(true)}
        >
          −
        </button>
      </div>

      {!isChatOpen ? (
        <div className="club-chat__welcome">
          <p className="club-chat__eyebrow">CLUB ASSISTANT</p>
          <h2>how can i help you?</h2>
          <p>your MLM Sports Club assistant</p>
          <div className="club-chat__suggestions">
            {suggestedQuestions.map((question) => (
              <button
                type="button"
                key={question}
                onClick={() => sendQuestion(question)}
              >
                {question}
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="club-chat__start"
            onClick={() => setIsChatOpen(true)}
          >
            Ask a question
          </button>
        </div>
      ) : (
        <div className="club-chat__conversation">
          <div className="club-chat__messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`club-chat__message club-chat__message--${message.role}${message.isError ? " club-chat__message--error" : ""}`}
                key={`${message.role}-${index}`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="club-chat__typing" aria-label="Assistant is typing">
                <span /> <span /> <span />
              </div>
            )}
          </div>
          <form className="club-chat__form" onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about the club..."
              aria-label="Ask the club assistant a question"
              rows="1"
              disabled={isLoading}
            />
            <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message">
              ↑
            </button>
          </form>
          <p className="club-chat__hint">Enter to send · Shift + Enter for a new line</p>
        </div>
      )}
    </aside>
  );
}
