import React from 'react'
import foto from "../assets/foto.jpeg"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DiReact, DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { MdPictureAsPdf } from "react-icons/md";
import resume from "../assets/RESUME.pdf"

export default function Hero() {
  return (
    <div  className='container grid grid-cols-1 items-center justify-center mt-14 m-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center m-auto '>
            <div className=' flex flex-row items-center justify-center '>
                <img className=' w-96 border-move ' src={foto} alt="" />
            </div>

            <div className='flex flex-col items-center lg:items-start justify-center mt-7  '>

                <h1 className='text-4xl  md:text-7xl bg-gradient-to-r from-orange-700 to-indigo-900 bg-clip-text  text-transparent'>Front-End Developer</h1>

                <span className='flex flex-row w-96 lg:w-97 text-center md:text-start p-3 md:p-0'>Hi, I'm Kaio Deodato. A passionate Front-end React Developer based in Portugal </span>
                
                <div className='grid grid-cols-3 gap-8 mt-4 items-center'>
                    <a target='_blank' href="https://github.com/kaiodeodato?tab=repositories" title="GitHub">
                        <BsGithub size={30} className='transition-colors cursor-pointer text-orange-700 hover:text-blue-900' />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/kaio-viana-6ab42016b/" title="LinkedIn">
                        <BsLinkedin size={28} className='transition-colors cursor-pointer text-orange-700 hover:text-blue-900'/>
                    </a>
                    <a target='_blank' href={resume} title="Resume">
                        <MdPictureAsPdf size={30} className='transition-colors cursor-pointer text-orange-700 hover:text-blue-900'/>
                    </a>
                </div>
                
            </div>
            
        </div>
            <div className='flex flex-col md:flex-row items-center justify-center mt-20 text-xl '>
                <div className='mr-5'>Tech Stack</div>
                <div className='flex flex-row items-center justify-center'>

                <div className='shadow-md mr-2 flex flex-row items-center justify-center bg-slate-100 w-12 lg:w-16 h-12 lg:h-16 rounded-full'>
                    <AiFillHtml5 size={32} className='transition-colors cursor-default text-orange-900 hover:text-blue-900 mx-2'/>
                </div>

                 <div className='shadow-md mr-2 flex flex-row items-center justify-center bg-slate-100 w-12 lg:w-16 h-12 lg:h-16 rounded-full'>
                    <DiCss3 size={32} className='transition-colors cursor-default text-orange-900 hover:text-blue-900 mx-2'/>
                </div>

                <div className='shadow-md mr-2 flex flex-row items-center justify-center bg-slate-100 w-12 lg:w-16 h-12 lg:h-16 rounded-full'>
                    <SiJavascript size={32} className='transition-colors cursor-default text-orange-900 hover:text-blue-900 mx-2'/>
                </div>

                <div className='shadow-md mr-2 flex flex-row items-center justify-center bg-slate-100 w-12 lg:w-16 h-12 lg:h-16 rounded-full'>
                    <SiTypescript size={32} className='transition-colors cursor-default text-orange-900 hover:text-blue-900 mx-2'/>
                </div>

                <div className='shadow-md mr-2 flex flex-row items-center justify-center bg-slate-100 w-12 lg:w-16 h-12 lg:h-16 rounded-full'>
                    <DiReact size={35} className='transition-colors cursor-default text-orange-900 hover:text-blue-900 mx-2'/>
                </div>

                <div className='shadow-md mr-2 flex flex-row items-center justify-center bg-slate-100 w-12 lg:w-16 h-12 lg:h-16 rounded-full'>
                    <SiTailwindcss size={35} className='transition-colors cursor-default text-orange-900 hover:text-blue-900 mx-2'/>
                </div>
            </div>
        </div>
    </div>
  )
}
