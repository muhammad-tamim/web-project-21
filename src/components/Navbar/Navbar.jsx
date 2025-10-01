import React from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const navItem = [
        { id: 1, name: "Home" },
        { id: 2, name: "FAQ" },
        { id: 3, name: "Changelog" },
        { id: 4, name: "Blog" },
        { id: 5, name: "Download" },
        { id: 6, name: "Contact" }
    ]

    return (
        <div className='py-[26px] border-b border-[#E9E9E9] '>
            <div className='px-5 md:px-10 xl:px-20 flex justify-between items-center'>
                <div>
                    <h1 className='text-[#130B2D] font-bold md:text-2xl'>CS - Ticket System</h1>
                </div>
                <div className='flex gap-8 items-center'>
                    <ul className='hidden lg:flex gap-8'>
                        {navItem.map((item) => <li key={item.id}><a href="#">{item.name}</a></li>)}
                    </ul>
                    <div><button className='hidden lg:flex btn bg-linear-to-bl from-[#9F62F2] to-[#632EE3] text-white font-semibold'><span className='pr-2.5 text-xl'>+</span> New Ticket</button></div>

                    {/* drawer for mobile device */}
                    <div className="drawer drawer-end lg:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-circle"><CiMenuFries /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="relative menu bg-base-200 text-base-content min-h-full w-64 p-4">
                                {/* Sidebar content here */}
                                <label htmlFor="my-drawer-4" className=" drawer-button btn btn-circle absolute right-2"><ImCross className='text-gray-400 font-normal' /></label>
                                <ul className='mt-12'>
                                    {navItem.map((item) => <li key={item.id}><a href="#">{item.name}</a></li>)}
                                </ul>
                                <div><button className='mt-4 btn bg-linear-to-bl from-[#9F62F2] to-[#632EE3] text-white font-semibold'><span className='pr-2.5 text-xl'>+</span> New Ticket</button></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;