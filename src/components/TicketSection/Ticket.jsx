import React from 'react';
import { GoDotFill } from 'react-icons/go';
import calendar from '../../assets/images/calendar.png'

const Ticket = () => {
    return (
        <div className='grid grid-cols-12 gap-8'>

            <div className='col-span-9'>
                <h2 className='text-2xl font-semibold text-[#34485A] pb-4'>Customer Tickets</h2>

                <div className='grid grid-cols-2 gap-6'>
                    {/* cards */}
                    <div className='shadow rounded-sm bg-white p-4'>
                        <div className='flex justify-between items-center pb-2'>
                            <p className='font-medium'>Login Issues - Can't Access Account</p>
                            <div className='flex items-center justify-center text-center px-3 py-1 rounded-[400px] bg-[#B9F8CF]'>
                                <GoDotFill className='text-4xl text-[#02A53B] text-center' />
                                <p className='text-[#0B5E06] font-medium text-center'>Open</p>
                            </div>
                        </div>
                        <p className='pb-4  text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className='font-medium text-sm flex justify-between'>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>#1001</p>
                                <p className='text-[#F83044]'>HIGH PRIORITY</p>
                            </div>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>John Smith</p>
                                <div className='flex gap-2'>
                                    <img src={calendar} alt="" />
                                    <p className='text-[#627382]'>1/15/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='shadow rounded-sm bg-white p-4'>
                        <div className='flex justify-between items-center pb-2'>
                            <p className='font-medium'>Login Issues - Can't Access Account</p>
                            <div className='flex items-center justify-center text-center px-3 py-1 rounded-[400px] bg-[#B9F8CF]'>
                                <GoDotFill className='text-4xl text-[#02A53B] text-center' />
                                <p className='text-[#0B5E06] font-medium text-center'>Open</p>
                            </div>
                        </div>
                        <p className='pb-4  text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className='font-medium text-sm flex justify-between'>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>#1001</p>
                                <p className='text-[#F83044]'>HIGH PRIORITY</p>
                            </div>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>John Smith</p>
                                <div className='flex gap-2'>
                                    <img src={calendar} alt="" />
                                    <p className='text-[#627382]'>1/15/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='shadow rounded-sm bg-white p-4'>
                        <div className='flex justify-between items-center pb-2'>
                            <p className='font-medium'>Login Issues - Can't Access Account</p>
                            <div className='flex items-center justify-center text-center px-3 py-1 rounded-[400px] bg-[#B9F8CF]'>
                                <GoDotFill className='text-4xl text-[#02A53B] text-center' />
                                <p className='text-[#0B5E06] font-medium text-center'>Open</p>
                            </div>
                        </div>
                        <p className='pb-4  text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className='font-medium text-sm flex justify-between'>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>#1001</p>
                                <p className='text-[#F83044]'>HIGH PRIORITY</p>
                            </div>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>John Smith</p>
                                <div className='flex gap-2'>
                                    <img src={calendar} alt="" />
                                    <p className='text-[#627382]'>1/15/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='shadow rounded-sm bg-white p-4'>
                        <div className='flex justify-between items-center pb-2'>
                            <p className='font-medium'>Login Issues - Can't Access Account</p>
                            <div className='flex items-center justify-center text-center px-3 py-1 rounded-[400px] bg-[#B9F8CF]'>
                                <GoDotFill className='text-4xl text-[#02A53B] text-center' />
                                <p className='text-[#0B5E06] font-medium text-center'>Open</p>
                            </div>
                        </div>
                        <p className='pb-4  text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className='font-medium text-sm flex justify-between'>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>#1001</p>
                                <p className='text-[#F83044]'>HIGH PRIORITY</p>
                            </div>
                            <div className='flex gap-4'>
                                <p className='text-[#627382]'>John Smith</p>
                                <div className='flex gap-2'>
                                    <img src={calendar} alt="" />
                                    <p className='text-[#627382]'>1/15/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='col-span-3 '>

                <h2 className='text-2xl font-semibold text-[#34485A]'>Task Status</h2>
                <div className='mb-10'>
                    <div className='mt-4 rounded-sm bg-white shadow p-4'>
                        <p className='font-medium pb-4'>Payment Failed - Card Declined</p>
                        <div>
                            <button className='btn bg-[#02A53B] text-white w-full'>Complete</button>
                        </div>
                    </div>
                </div>

                <h2 className='text-2xl font-semibold text-[#34485A]'>Resolved Task</h2>
                <div>
                    <p className='mt-4 px-4 py-5 bg-[#E0E7FF] rounded-sm font-medium shadow'>Incorrect Billing Address</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;