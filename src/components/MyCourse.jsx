import React from 'react'
import { FaCertificate } from "react-icons/fa";

export default function MyCourse({ title, content, institution, certificate}) {
  return (
    <div className='relative shadow-lg container w-44 md:w-60 h-52 bg-blue-900 grid grid-cols-1  items-center justify-center rounded-3xl'>

      <div className='absolute top-0 right-0 translate-x-5 -translate-y-3 flex justify-center items-center'>
        <FaCertificate className='mx-3 iconflip text-yellow-500 absolute ' size="40"/>
        <FaCertificate className='mx-3  text-yellow-400 opacity-60' size="25"/>
      </div>

      <div className='cursor-default flex flex-col items-center justify-center m-auto text-slate-200 p-3'>
        <h1 className='text-sm md:text-lg'>{title}</h1>
        <span className='text-sm text-slate-300 text-center'>{content}</span>
        {/* <span className='text-md md:text-xl mt-2'>{institution}</span> */}
        <a className='flex flex-row items-center justify-center text-slate-200 mt-2' target='_blank' rel="noreferrer" href={certificate}>Link</a>  
      </div>
    </div>
  )
}
