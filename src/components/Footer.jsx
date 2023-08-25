import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='w-full min-h-20 mt-24 flex flex-row items-center justify-around  bg-slate-800 text-slate-300 text-sm py-4 m-auto'>
        <div className=''>
          Kaio Deodato © 2023 - All rights reserved.
        </div>
        <div className='flex flex-row mx-3'>
          <a target='_blank' href="https://github.com/kaiodeodato?tab=repositories" >
            <BsGithub className='mx-2'/>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/kaio-viana-6ab42016b/" >
            <BsLinkedin className='mx-2'/>
          </a>

         
        </div>
        
    </div>
  )
}
