import React from 'react'
import foto from "../assets/pic1.jpg"
import { FcCollaboration, FcSmartphoneTablet, FcApproval } from "react-icons/fc";




export default function About() {
  return (
    <div id='about' className='pt-28'>
      <h1 className=' text-slate-600 text-center  font-bold text-4xl mx-auto '>About Me</h1>

      <div className='container  grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center mt-10  m-auto'>

      
        
        <div className='p-5 flex flex-row md:justify-end justify-center items-end '>
              <img className='shadow-xl rounded-3xl w-97 ' src={foto} alt="foto" />
              <div className='absolute flex translate translate-y-4 translate-x-4  md:translate-y-4 md:translate-x-4'>

                <div className='icon1 w-14 h-14 flex flex-row items-center justify-center bg-slate-100 rounded-full shadow-lg mx-2 text-orange-900'>
                  <FcSmartphoneTablet size={30}/>
                </div>

                <div className='icon2 w-14 h-14 flex flex-row items-center justify-center bg-slate-100 rounded-full shadow-lg mx-2 text-orange-900'>
                  < FcApproval size={30} />
                </div>

                <div className='icon1 w-14 h-14 flex flex-row items-center justify-center bg-slate-100 rounded-full shadow-lg mx-2 text-orange-900'>
                  <FcCollaboration size={30}/>
                </div>

              </div>
        </div>

        <div className='flex flex-col  items-center md:items-start justify-center'>
      
              <h1 className='bg-gradient-to-r from-orange-700 to-indigo-900 bg-clip-text text-center md:text-start mb-5 text-transparent font-bold text-4xl w-96 md:w-96 lg:w-97 p-3 lg:p-0'>A dedicated Software Engineer based in Portugal</h1>
              <span className='w-96 md:w-96 lg:w-97 text-center md:text-start p-3 lg:p-0'>As a Software Engineer, I possess an arsenal of skills that includes .Net, C#, JavaScript, React, Tailwind, Styles Components, amoung others. I excel in designing and maintaining <span className='text-orange-700 text-lg'>responsive websites</span> that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing <span className='text-orange-700 text-lg'>clean and optimized code</span>  and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in <span className='text-orange-700 text-lg'>collaborating</span> with cross-functional teams to produce outstanding. I am not from a BackEnd background, but I have had the opportunity to contribute to several BackEnd projects and I am eager to learn more.</span>
        </div>
      </div>
    </div>
  )
}
