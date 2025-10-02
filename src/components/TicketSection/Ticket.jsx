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

            <div className='lg:grid lg:grid-cols-12 lg:gap-8 space-y-10 lg:space-y-0'>

                <div className='lg:col-span-9'>
                    <h2 className='text-2xl font-semibold text-[#34485A] pb-4'>Customer Tickets</h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {/* cards */}
                        {loading && <div className='text-center col-span-2'>
                            <span className="loading size-16 loading-spinner"></span>
                        </div>}

                        {error && <p className='text-center text-3xl text-red-500'>{error.message}</p>}

                        {tickets.map(card => (
                            <div key={card.id} className='shadow rounded-sm bg-white p-4'>
                                <div className='flex justify-between items-center pb-2'>
                                    <p className='font-medium text-xs md:text-base'>{card.title}</p>
                                    <div onClick={() => handleClick(card)} className={`flex items-center justify-center text-center px-3 py-1 rounded-[400px] ${card.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} cursor-pointer`}>
                                        <GoDotFill className={`lg:text-4xl ${card.status === "Open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}  text-center`} />
                                        <p className={`text-sm ${card.status === "Open" ? "text-[#0B5E06]" : "text-[#FEBB0C]"} font-medium text-center`}>{card.status}</p>
                                    </div>
                                </div>
                                <p className='pb-4  text-[#627382] text-sm'>{card.description}</p>
                                <div className='font-medium text-xs flex justify-between '>
                                    <div className='flex lg:gap-4 gap-1'>
                                        <p className='text-[#627382]'>#100{card.id}</p>
                                        <p className={`${card.priority === "High" && "text-[#F83044]" || card.priority === "Low" && "text-[#02A53B]" || card.priority === "Medium" && "text-[#FEBB0C]"} `}>{card.priority}</p>
                                    </div>
                                    <div className='flex lg:gap-4 gap-1'>
                                        <p className='text-[#627382]'>{card.customer}</p>
                                        <div className='flex items-center lg:gap-2 gap-0.5'>
                                            <img src={calendar} className='size-5' alt="" />
                                            <p className='text-[#627382]'>{card.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='lg:col-span-3 '>

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