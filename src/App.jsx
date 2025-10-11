import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TicketSection from './components/TicketSection/TicketSection';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar></Navbar>
      <div className='py-[80px]'>
        <TicketSection></TicketSection>
      </div>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
};

export default App;