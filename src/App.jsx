import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TicketSection from './components/TicketSection/TicketSection';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar></Navbar>
      <div className='py-[80px] bg-[#F5F5F5]'>
        <TicketSection></TicketSection>
      </div>
    </div>
  );
};

export default App;