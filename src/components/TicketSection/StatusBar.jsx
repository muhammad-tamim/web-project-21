import React from 'react';
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'

const StatusBar = ({ inProgress }) => {
    return (
        <div className='flex gap-6 justify-center pb-[80px]'>
            <div className='relative text-white w-[708px] h-[250px] rounded-lg flex flex-col justify-center items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
                <img className='absolute left-0' src={vector1} alt="" />
                <p className='text-2xl'>In-Progress</p>
                <h1 className='font-semibold text-[60px]'>{inProgress}</h1>
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