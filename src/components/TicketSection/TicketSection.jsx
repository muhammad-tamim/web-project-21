import React, { useEffect, useState } from 'react';
import StatusBar from './StatusBar';
import Ticket from './Ticket';


const TicketSection = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [inProgress, setInProgress] = useState(0)
    const [resolvedCount, setResolvedCount] = useState(0)

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='mx-5 md:mx-10 xl:mx-20 bg-white'>
            <StatusBar inProgress={inProgress} resolvedCount={resolvedCount}></StatusBar>
            <Ticket data={data} error={error} loading={loading} inProgress={inProgress} setInProgress={setInProgress} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount}></Ticket>
        </div>
    );
};

export default TicketSection;