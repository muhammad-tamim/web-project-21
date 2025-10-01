import React from 'react';
import StatusBar from './StatusBar';
import Ticket from './Ticket';


const TicketSection = () => {
    return (
        <div className='mx-5 md:mx-10 xl:mx-20 bg-white'>
            <StatusBar></StatusBar>
            <Ticket></Ticket>
        </div>
    );
};

export default TicketSection;