import { GoDotFill } from 'react-icons/go';
import calendar from '../../assets/images/calendar.png'
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Ticket = ({ data, error, loading, inProgress, setInProgress }) => {

    const [singleData, setSingleData] = useState([])
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        setTickets(data)
    }, [data])

    const handleClick = (clickedData) => {
        setSingleData([...singleData, clickedData])
        setInProgress(inProgress + 1)

        const updatedTicketStatus = tickets.map(ticket => ticket.id === clickedData.id ? { ...ticket, status: "in-Progress" } : ticket)
        setTickets(updatedTicketStatus)

        toast.success("Your Ticket is in Progress");
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
                    {singleData.map(data => <div key={data.id} className='mb-10'>
                        <div className='mt-4 rounded-sm bg-white shadow p-4'>
                            <p className='font-medium pb-4'>{data.title}</p>
                            <div>
                                <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                            </div>
                        </div>
                    </div>
                    )}

                    <h2 className='text-2xl font-semibold text-[#34485A]'>Resolved Task</h2>
                    <p className='my-4 text-[#627382]'>No resolved tasks yet.</p>
                    <div>
                        <p className='mt-4 px-4 py-5 bg-[#E0E7FF] rounded-sm font-medium shadow'>Incorrect Billing Address</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ticket;