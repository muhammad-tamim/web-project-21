import React from 'react';
import x from '../../assets/images/x.png'
import facebook from '../../assets/images/facebook.png'
import email from '../../assets/images/email.png'
import linkedin from '../../assets/images/linkedin.png'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='px-5 md:px-10 xl:px-20'>
                <div className='py-[80px] flex flex-col gap-10 md:flex-wrap md:flex-row lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold'>CS - Ticket System</h2>
                        <p>Add some meaningful text</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium'>Company</h2>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium'>Services</h2>
                        <ul>
                            <li><a href="#">Product & Service</a></li>
                            <li><a href="#">Customer Stories</a></li>
                            <li><a href="#">Download Apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium'>Information</h2>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Join Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium pb-2'>Social Links</h2>
                        <ul className='space-y-2'>
                            <li className='flex gap-2'>
                                <img className='size-5' src={x} alt="" />
                                <p>@CS — Ticket System</p>
                            </li>
                            <li className='flex gap-2'>
                                <img className='size-5' src={linkedin} alt="" />
                                <p>@CS — Ticket System</p>
                            </li>
                            <li className='flex gap-2'>
                                <img className='size-5' src={facebook} alt="" />
                                <p>@CS — Ticket System</p>
                            </li>
                            <li className='flex gap-2'>
                                <img className='size-5' src={email} alt="" />
                                <p>support@cst.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-[#E9E9E920]'>
                    <p className='text-center py-[30px]'>© 2025 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;