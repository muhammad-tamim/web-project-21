import { GoDotFill } from 'react-icons/go';
import calendar from '../../assets/images/calendar.png'
import { useState } from 'react';

const Ticket = ({ data, error, loading }) => {

    const [singleData, setSingleData] = useState([])

    const handleClick = (clickedData) => {
        setSingleData([...singleData, clickedData])
    }

    return (
        <div className='grid grid-cols-12 gap-8'>

            <div className='col-span-9'>
                <h2 className='text-2xl font-semibold text-[#34485A] pb-4'>Customer Tickets</h2>

                <div className='grid grid-cols-2 gap-6'>
                    {/* cards */}
                    {loading && <div className='text-center col-span-2'>
                        <span className="loading size-16 loading-spinner"></span>
                    </div>}

                    {error && <p className='text-center text-3xl text-red-500'>{error.message}</p>}

                    {data.map(card => (
                        <div key={card.id} className='shadow rounded-sm bg-white p-4'>
                            <div className='flex justify-between items-center pb-2'>
                                <p className='font-medium'>{card.title}</p>
                                <div onClick={() => handleClick(card)} className='flex items-center justify-center text-center px-3 py-1 rounded-[400px] bg-[#B9F8CF] cursor-pointer'>
                                    <GoDotFill className='text-4xl text-[#02A53B] text-center' />
                                    <p className='text-[#0B5E06] font-medium text-center'>{card.status}</p>
                                </div>
                            </div>
                            <p className='pb-4  text-[#627382]'>{card.description}</p>
                            <div className='font-medium text-sm flex justify-between'>
                                <div className='flex gap-4'>
                                    <p className='text-[#627382]'>#100{card.id}</p>
                                    <p className='text-[#F83044]'>{card.priority}</p>
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

                {singleData.map(data => <div className='mb-10'>
                    <div className='mt-4 rounded-sm bg-white shadow p-4'>
                        <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                        <div>
                            <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                        </div>
                    </div>
                </div>
                )}

                <h2 className='text-2xl font-semibold text-[#34485A]'>Resolved Task</h2>
                <div>
                    <p className='mt-4 px-4 py-5 bg-[#E0E7FF] rounded-sm font-medium shadow'>Incorrect Billing Address</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;