import React,{ useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/about';
import { IoIosArrowUp } from "react-icons/io";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';



function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-1 '>
    
      {scrollPosition > 300 && 
          <a href='#home' className='z-10 fixed right-10 bottom-10 w-14 h-14 bg-orange-700 rounded-md opacity-80 flex flex-row items-center justify-center hover:scale-105 transition-transform hover:opacity-70'>
            <IoIosArrowUp size={40} className='text-slate-200'/>
    
          </a>
      }
        <Hero/>
        <About />
        <Education/>
        <Projects />
        <Contact/>
        
        <Footer />
      </main>
      
    </div>
  );  
}

export default App;