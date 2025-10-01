import React, { useEffect, useState } from 'react';
import StatusBar from './StatusBar';
import Ticket from './Ticket';


const TicketSection = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='mx-5 md:mx-10 xl:mx-20 bg-white'>
            <StatusBar></StatusBar>
            <Ticket data={data} error={error} loading={loading}></Ticket>
        </div>
    );
};

export default TicketSection;