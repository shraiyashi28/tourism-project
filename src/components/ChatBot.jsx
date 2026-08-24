import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

<RiRobot2Line size={60}  color="white " />


function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm your AI Travel Assistant.\nHow can I help you today?",
    },
  ]);

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const Reply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("bali"))
    return "🌴 Bali is famous for Uluwatu Temple, Tanah Lot, Nusa Penida, and Kuta Beach.";

  if (text.includes("indonesia"))
    return "🇮🇩 Indonesia's top attractions include Bali, Raja Ampat, Komodo Island, and Mount Bromo.";

  if (text.includes("australia"))
    return "🦘 Australia offers Sydney Opera House, Great Barrier Reef, Gold Coast, and Uluru.";

  if (text.includes("hotel"))
    return "🏨 I recommend Ayana Resort, Padma Resort, or Hard Rock Hotel Bali.";

  if (text.includes("budget"))
    return "💰 A 5-day Bali trip usually costs around ₹50,000–₹80,000.";

  if (text.includes("contact"))
    return "📞 Email: tourism@gmail.com\nPhone: +91 98765 43210";

  return "🤖 Sorry, I don't know the answer yet. Please ask about tourist places, hotels, budgets, travel tips, or contact information.";
};

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMsg]);

    const question = input;

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: Reply(question),
        },
      ]);
    }, 800);
  };

  return (
    <>
     

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500 text-white shadow-2xl hover:scale-110 duration-300"
      >
        {open ? (
          <FaTimes size={24} />
        ) : (
          <FaRobot size={28} />
        )}
      </button>

      

      {open && (
        <div className="fixed bottom-20 right-3 left-3 sm:left-auto sm:bottom-28 sm:right-8 w-auto sm:w-[360px] h-[min(560px,calc(100vh-96px))] bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

         

          <div className="bg-cyan-500 text-white p-5 flex items-center gap-3">

            <FaRobot size={28} />

            <div>
              <h2 className="font-bold">
                AI Travel Assistant
              </h2>

              <p className="text-xs">
                Online
              </p>
            </div>

          </div>

          

          <div className="flex flex-wrap gap-2 p-3 bg-gray-100">

            {[
              "🏝 Bali",
              "🇮🇩 Indonesia",
              "🦘 Australia",
              "💰 Budget",
              "🏨 Hotels",
              "🤔 any questions",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setInput(item)}
                className="bg-cyan-100 px-3 py-1 rounded-full text-sm hover:bg-cyan-300"
              >
                {item}
              </button>
            ))}

          </div>


          <div className="h-[min(330px,calc(100vh-326px))] min-h-[150px] overflow-y-auto p-4 space-y-3 bg-gray-50">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "ml-auto bg-cyan-500 text-white"
                    : "bg-white shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={bottomRef}></div>

          </div>

      

          <div className="flex p-3 border-t">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your trip..."
              className="flex-1 border rounded-full px-4 py-2 outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              className="ml-2 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default ChatBot;