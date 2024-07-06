import React from 'react'

import { BsGithub } from "react-icons/bs";
import { SiApollographql  } from "react-icons/si";


export default function ProjectCardLeft({title, content, tech, image, link, git, other}) {
  return (
    <div className='container  grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center m-auto'>
      
       <div className='p-5 flex flex-row md:justify-end justify-center items-end'>
       <a target='_blank' rel="noreferrer" href={link} className='shadow-xl h-96 overflow-hidden rounded-3xl '>
                <img className='rounded-3xl w-97 mt-0 hover:-mt-code duration-10000 transition-all' src={image} alt="foto" />
            </a>

            <div className='absolute flex translate translate-y-4 translate-x-4  md:translate-y-4 md:translate-x-4'>

            </div>
       </div>
       <div className='flex flex-col  items-center md:items-start justify-center cursor-default'>
            
            <h1 className='bg-gradient-to-r from-orange-700 to-indigo-900 bg-clip-text text-center md:text-start mb-5 text-transparent font-bold text-4xl w-96 md:w-96 lg:w-97'>
              {title}
            </h1>
            <span className='w-96 md:w-96 lg:w-97 text-center md:text-start p-2'>
              {content}
            </span>
            <span className='w-96 md:w-96 lg:w-97 mt-4 text-center md:text-start text-slate-400 p-2'>
              {tech}
            </span>
            <div className='flex'>
              <a 
              target='_blank' 
              rel="noreferrer"
              href={git} 
              className='text-center text-slate-400 p-2 mt-2 hover:text-gray-600 duration-500'>
                <BsGithub size={40}/>
              </a>
              {other && 
                (
                  <div className='flex flex-row justify-center items-center'> 
                    <a 
                      target='_blank' 
                      rel="noreferrer"
                      href="https://studio.apollographql.com/sandbox/explorer/?_gl=1%2Aqelm17%2A_ga%2AMTk4MTU3ODU1Ny4xNzEwMzM0ODY0%2A_ga_0BGG5V2W2K%2AMTcxNTg2NjgzNS41MS4wLjE3MTU4NjY4MzUuMC4wLjA."
                      className='text-center text-2xl text-slate-400 p-2 mt-2 hover:text-gray-600 duration-500'>
                      <SiApollographql size={40}/>
                    </a>

                    <a 
                      target='_blank' 
                      rel="noreferrer"
                      href={other} 
                      className='text-center text-2xl text-slate-400 p-2 mt-2 hover:text-gray-600 duration-500'>
                      Endpoint
                    </a>
                    
                  </div>
                )
              }
            </div>

       </div>
    </div>
  )
}
