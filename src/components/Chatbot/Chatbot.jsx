import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi there! How can I help you today?' },
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {

        const userMsg = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMsg]);

        // Simple mock responses
        let botReply = "Sorry, i couldn't anser your query! for better answer for me use words like (ticket, status or help) on your query";
        if (input.toLowerCase().includes('ticket')) botReply = 'You can view all tickets on the main page.';
        else if (input.toLowerCase().includes('status')) botReply = 'Tickets can be In Progress or Resolved.';
        else if (input.toLowerCase().includes('help')) botReply = 'Sure! You can manage tickets or ask about their status.';

        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
        }, 600);

        setInput('');
    };

    return (
        <div className="fixed bottom-6 right-1 md:right-6 m-2 md:m-0 z-50">
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="cursor-pointer bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    <FaRobot size={22} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    className={`w-76 md:w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200
    transform transition-all duration-300 ease-out
    ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-5'}`}
                >
                    <div className="bg-linear-to-br from-[#54CF68] to-[#00827A] text-white px-4 py-3 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-semibold text-sm">CS-Ticket Assistant</h3>
                        <button onClick={toggleChat} className="cursor-pointer text-white hover:text-gray-200">✖</button>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto space-y-2">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`px-3 py-2 rounded-lg text-sm ${msg.sender === 'user'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-2 gap-1 flex items-center">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                        />
                        <button
                            onClick={handleSend}
                            className="cursor-pointer bg-linear-to-br from-[#54CF68] to-[#00827A] text-white p-2 rounded-lg transition hover:opacity-90"
                        >
                            <IoSend size={16} />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Chatbot;
