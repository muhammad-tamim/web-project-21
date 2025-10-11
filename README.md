# Project Name: CS-Ticket System

## Project Description:  
CS-Ticket System is a React-based Customer Support web application designed to help customer service teams efficiently manage support tickets. It provides an intuitive interface to display tickets, track their progress, and update their status (In Progress or Resolved). With real-time statistics, interactive ticket management, and a clean dashboard layout, the system ensures smooth and organized customer support operations.

## Live Site Link:

https://web-project-21.netlify.app/

## Project Video:
https://github.com/user-attachments/assets/780fca0e-aeac-4cad-a660-67cf2975a554


## What I Learned New while Building This Project:
1. Different way to rendered list using map: 

way 1: using parenthesis :

```jsx
        {singleData.map(data => (
                    <div className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                ))}
```

way 2: using `<div>`;

```jsx

                {singleData.map(data => <div className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                )}
```

way 3: using fragment: 

```jsx
        {singleData.map(data => <>
                    <div className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                </>)}
```

4. How to made a demo chatbot

```jsx
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
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    <FaRobot size={22} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-72 md:w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
                    <div className="bg-linear-to-br from-[#54CF68] to-[#00827A] text-white px-4 py-3 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-semibold text-sm">CS-Ticket Assistant</h3>
                        <button onClick={toggleChat} className="text-white hover:text-gray-200">✖</button>
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

                    <div className="p-2 flex items-center">
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
                            className="ml-2 bg-linear-to-br from-[#54CF68] to-[#00827A] text-white p-2 rounded-lg  transition"
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
```

## Challenges I faced while Building This Project:
1. I faced a lot of trouble designing two status bar cards, because they have a linear gradient with two vectors (one on the left and one on the right). I kept thinking about how to do that and tried different ways. After spending lots of time, I finally found the way:

```jsx
import React from 'react';
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'

const StatusBar = () => {
    return (
        <div className='flex gap-6 justify-center px-5 md:px-10 xl:px-20'>
            <div className='relative text-white w-[708px] h-[250px] rounded-lg flex flex-col justify-center items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
                <img className='absolute left-0' src={vector1} alt="" />
                <p className='text-2xl'>In-Progress</p>
                <h1 className='font-semibold text-[60px]'>0</h1>
                <img className='absolute right-0' src={vector2} alt="" />
            </div>
            <div className='relative text-white w-[708px] h-[250px] rounded-lg flex flex-col justify-center items-center bg-linear-to-br from-[#54CF68] to-[#00827A]'>
                <img className='absolute left-0' src={vector1} alt="" />
                <p className='text-2xl'>Resolved</p>
                <h1 className='font-semibold text-[60px]'>0</h1>
                <img className='absolute right-0' src={vector2} alt="" />
            </div>
        </div >
    );
};

export default StatusBar;
```
here,
`bg-linear-to-br from-[#632EE3] to-[#9F62F2]`
- to-br → gradient flows towards bottom-right.
- from-[#632EE3] → color #632EE3 starts at top-left.
- to-[#9F62F2] → color #9F62F2 ends at bottom-right.

2. I’m really struggling with building the logic for handling and resolving the data: 
- When a ticket is clicked, I want to move it into the in-progress section, store the count, update its status, and show a success toast.

- Then, when the task is marked as complete, I want it removed from the in-progress list, remove the data form all the ticket list, added to the resolved list, store the count and again show a success toast.

```jsx
import { GoDotFill } from 'react-icons/go';
import calendar from '../../assets/images/calendar.png'
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Ticket = ({ data, error, loading, inProgress, setInProgress, resolvedCount, setResolvedCount }) => {

    const [singleData, setSingleData] = useState([])
    const [tickets, setTickets] = useState([])
    const [resolvedData, setResolvedData] = useState([])

    useEffect(() => {
        setTickets(data)
    }, [data])

    const handleClick = (clickedData) => {
        setSingleData([...singleData, clickedData])
        setInProgress(inProgress + 1)

        const updatedTicketStatus = tickets.map(ticket => ticket.id === clickedData.id ? { ...ticket, status: "in-Progress" } : ticket)
        setTickets(updatedTicketStatus)

        toast.success("Your ticket is in-Progress");
    }

    const handleCompleteClick = (id) => {
        const filteredSingleData = singleData.filter((filterSingle) => filterSingle.id !== id)
        setSingleData(filteredSingleData)
        const findResolvedData = singleData.find(findResolved => findResolved.id === id)
        setResolvedData([...resolvedData, findResolvedData])


        // remove the resolved data form the all ticket card list
        const remainingData = tickets.filter(remaining => remaining.id !== id)
        setTickets(remainingData)

        // increase the resolved count and decreased the resolved count
        setResolvedCount(resolvedCount + 1)
        setInProgress(inProgress - 1)

        toast.success("Your ticket is resolved successfully");
    }

    return (
        <>
            <ToastContainer autoClose={1000} />

            <div className='grid grid-cols-12 gap-8'>

                <div className='col-span-9'>
                    <h2 className='text-2xl font-semibold text-[#34485A] pb-4'>Customer Tickets</h2>

                    <div className='grid grid-cols-2 gap-6'>
                        {/* cards */}
                        {loading && <div className='text-center col-span-2'>
                            <span className="loading size-16 loading-spinner"></span>
                        </div>}

                        {error && <p className='text-center text-3xl text-red-500'>{error.message}</p>}

                        {tickets.map(card => (
                            <div key={card.id} className='shadow rounded-sm bg-white p-4'>
                                <div className='flex justify-between items-center pb-2'>
                                    <p className='font-medium'>{card.title}</p>
                                    <div onClick={() => handleClick(card)} className={`flex items-center justify-center text-center px-3 py-1 rounded-[400px] ${card.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} cursor-pointer`}>
                                        <GoDotFill className={`text-4xl ${card.status === "Open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}  text-center`} />
                                        <p className={`${card.status === "Open" ? "text-[#0B5E06]" : "text-[#FEBB0C]"} font-medium text-center`}>{card.status}</p>
                                    </div>
                                </div>
                                <p className='pb-4  text-[#627382]'>{card.description}</p>
                                <div className='font-medium text-sm flex justify-between'>
                                    <div className='flex gap-4'>
                                        <p className='text-[#627382]'>#100{card.id}</p>
                                        <p className={`${card.priority === "High" && "text-[#F83044]" || card.priority === "Low" && "text-[#02A53B]" || card.priority === "Medium" && "text-[#FEBB0C]"} `}>{card.priority}</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <p className='text-[#627382]'>{card.customer}</p>
                                        <div className='flex gap-2'>
                                            <img src={calendar} alt="" />
                                            <p className='text-[#627382]'>{card.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='col-span-3 '>

                    <h2 className='text-2xl font-semibold text-[#34485A]'>Task Status</h2>

                    {singleData.length === 0 && <p className='my-4 text-[#627382]'>Select a ticket to add to Task Status</p>}
                    {singleData.map(data => <div key={data.id} className=''>
                        <div className='my-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>{data.title}</p>
                            <div>
                                <button onClick={() => handleCompleteClick(data.id)} className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                    )}

                    <h2 className='text-2xl font-semibold text-[#34485A]'>Resolved Task</h2>
                    {resolvedData.length === 0 && <p className='my-4 text-[#627382]'>No resolved tasks yet.</p>}

                    {resolvedData.map((resolved) => <p key={resolved.id} className='mt-4 px-4 py-5 bg-[#E0E7FF] rounded-sm font-medium shadow'>{resolved.title}</p>)}

                </div>
            </div>
        </>
    );
};

export default Ticket;
```

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
