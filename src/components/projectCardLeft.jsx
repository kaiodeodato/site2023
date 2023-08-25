import React from 'react'

import { BsGithub } from "react-icons/bs";


export default function ProjectCardLeft({title, content, tech, image, link,git}) {
  return (
    <div className='container  grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center m-auto'>
      
       <div className='p-5 flex flex-row md:justify-end justify-center items-end'>
       <a target='_blank' href={link} className='shadow-xl h-96 overflow-hidden rounded-3xl '>
                <img className='rounded-3xl w-97 mt-0 hover:-mt-coin duration-10000 transition-all' src={image} alt="foto" />
            </a>

            <div className='absolute flex translate translate-y-4 translate-x-4  md:translate-y-4 md:translate-x-4'>

            </div>
       </div>
       <div className='flex flex-col  items-center md:items-start justify-center'>
            
            <h1 className='bg-gradient-to-r from-orange-700 to-indigo-900 bg-clip-text text-center md:text-start mb-5 text-transparent font-bold text-4xl w-96 md:w-96 lg:w-97'>
              {title}
            </h1>
            <span className='w-96 md:w-96 lg:w-97 text-center md:text-start p-2'>
              {content}
            </span>
            <span className='w-96 md:w-96 lg:w-97 mt-4 text-center md:text-start text-slate-400 p-2'>
              {tech}
            </span>
            <a 
            target='_blank' 
            href={git} 
            className='text-center text-slate-400 p-2 mt-2'>
              <BsGithub size={40}/>
            </a>
       </div>
    </div>
  )
}
