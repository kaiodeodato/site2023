import React from 'react'
import foto from "../assets/pic1.jpg"
import { BsGithub } from "react-icons/bs";
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
      
              <h1 className='bg-gradient-to-r from-orange-700 to-indigo-900 bg-clip-text text-center md:text-start mb-5 text-transparent font-bold text-4xl w-96 md:w-96 lg:w-97 p-3 lg:p-0'>A dedicated data analyst based in Portugal</h1>
              <p className='w-96 md:w-96 lg:w-97 text-center md:text-start p-3 lg:p-0'>Coming from a background in Fullstack development and graphic design, I have theoretical and practical knowledge in the development and implementation of projects, both within a team and as a standalone developer. I have experience working with a variety of tools, such as Python, MySQL, as well as other structured technologies like MongoDB, Cassandra, and other NoSQL technologies. I consistently prioritize writing clean code, adhering to best practices, and ensuring efficiency in my work.</p>
              <p className='w-96 md:w-96 text-gray-600 lg:w-97 text-center md:text-start p-3 lg:p-0 mt-5'>I am a Power BI Desktop Certified Professional with extensive knowledge of data visualization best practices. I have experience creating interactive tools and static infographics that are suitable for online consumption or printing. In addition to Tableau, I have primarily worked with Tableau for my data visualization projects.</p>
              
        </div>
      </div>
    </div>
  )
}
{/* <span className='text-orange-700 text-lg'>responsive websites</span> */}