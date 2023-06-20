import React,{ useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const falseMenu = () => {
        setIsMenuOpen(false);
      };

  return (
    <div id='home' className='z-10  container  m-auto flex flex-row mt-5 rounded-full  items-center justify-between pt-4'>

        <a href='#' className='text-2xl text-slate-700  hover:text-slate-400 transition-colors font-bold  pl-5'>Kaio D.</a>

        <button
        type="button"
        onClick={toggleMenu}
        className="block md:hidden focus:outline-none  text-slate-600  transition-colors "
        >

        {!isMenuOpen && (
                <GiHamburgerMenu className="h-8 w-8 mr-3 hover:text-slate-400 transition-colors" />
            )}      

        </button>

      <div
        className={`${
          isMenuOpen ? 'fixed top-0 right-0' : 'hidden'
        }  flex justify-center items-center md:block md:w-auto `}
        
      >
        <ul className=" bg-slate-300  md:bg-transparent w-48 md:w-auto h-screen md:h-auto  text-right text-slate-800 font-medium flex flex-col rounded-lg text-2xl md:text-lg lg:text-xl md:flex-row md:space-x-8  ">
          <li>
            <a
              href="#home"
              className="block py-2 pl-3 pr-4  transition-colors hover:text-slate-400 mt-44 md:mt-0"
              onClick={falseMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 pl-3 pr-4 transition-colors hover:text-slate-400  mt-5 md:mt-0"
              onClick={falseMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block  py-2 pl-3 pr-4 transition-colors hover:text-slate-400  mt-5 md:mt-0"
              onClick={falseMenu}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 pl-3 pr-4 transition-colors hover:text-slate-400  mt-5 md:mt-0"
              onClick={falseMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 pl-3 pr-4 transition-colors hover:text-slate-400 mt-5 md:mt-0"
              onClick={falseMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div> 







        

    </div>
  )
}
