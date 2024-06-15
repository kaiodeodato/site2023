import React from 'react'
import { FaCertificate } from "react-icons/fa";

export default function EducationCard({ title, content, institution, certificate}) {
  return (
    <div className='relative shadow-lg container w-44 md:w-60 h-52 bg-slate-800 grid grid-cols-1  items-center justify-center rounded-3xl'>

      <div className='absolute top-0 right-0 translate-x-5 -translate-y-3 flex justify-center items-center'>
        <FaCertificate className='mx-3 iconflip text-yellow-500 absolute ' size="40"/>
        <FaCertificate className='mx-3 iconflip text-yellow-400 opacity-60' size="30"/>
      </div>

      <div className='cursor-default flex flex-col items-center justify-center m-auto text-slate-200 p-3'>
        <h1 className='text-sm md:text-lg'>{title}</h1>
        <span className='text-sm text-slate-400 text-center'>{content}</span>
        <span className='text-md md:text-xl mt-2'>{institution}</span>
      </div>
      
    
      {/* <a className='absolute flex flex-row items-center justify-center bg-gradient-to-r from-orange-700 to-indigo-900 text-slate-200 translate-y-24 md:translate-x-4 text-xl p-1 m-4 md:m-8 rounded-full hover:scale-105 transition-transform' target='_blank' rel="noreferrer" href={certificate}>
        certificate <FaCertificate className='mx-3 iconflip' size="20"/>
      </a>   */}
    </div>
  )
}
