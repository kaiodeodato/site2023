import React from 'react'
import { FaCertificate } from "react-icons/fa";
import { FcCollaboration, FcSmartphoneTablet, FcApproval } from "react-icons/fc";

export default function EducationCard({ title, content, institution, certificate}) {
  return (
    <div className='shadow-lg container w-44 md:w-60 h-48 bg-slate-800 grid grid-cols-1  items-center justify-center rounded-3xl'>
      <div className='cursor-default flex flex-col items-center justify-center m-auto text-slate-200 p-3'>
        <h1 className='text-sm md:text-lg'>{title}</h1>
        <span className='text-sm text-slate-500 text-center'>{content}</span>
        <span className='text-md md:text-xl'>{institution}</span>

      </div>
      
    
      <a className='absolute flex flex-row items-center justify-center bg-gradient-to-r from-orange-700 to-indigo-900 text-slate-200 translate-y-24 md:translate-x-4 text-xl p-1 m-4 md:m-8 rounded-full hover:scale-105 transition-transform' target='_blank' href={certificate}>
        certificate <FaCertificate className='mx-3 iconflip' size="20"/>
      </a>  
    </div>
  )
}
