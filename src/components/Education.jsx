import React from 'react'
import foto from "../assets/foto.jpeg"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DiReact, DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import EducationCard from './EducationCard';

import certificadoHarvard from "../assets/certificadoHarvard.pdf"
import certificadoMern from "../assets/certificadoMern.pdf"
import certificadotypescript from "../assets/certificadotypescript.pdf"
import certificadoReact from "../assets/certificadoReact.pdf"
import certificadoNext from "../assets/certificadoNext.pdf"
import certificadoNode from "../assets/certificadoNode.pdf"


export default function Education() {
  return (
    <div id='education' className='container flex flex-col items-center justify-center mt-14 m-auto ' >
      <h1 className='mt-14 text-slate-600 text-center  font-bold text-4xl mx-auto '>Education</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-20 p-2'>
        
        <EducationCard
            title="Mern Stack"
            content = "The course provided a solid understanding of MongoDB, Express, React, and Node - Known as the MERN stack."
            institution='Danki Code'
            certificate={certificadoMern}
        />
        <EducationCard
            title="CS50 Computer Science"
            content = "Introduction of computer science and the art of programming and teaching C, Python, SQL, JavaScript."
            institution='Harvard University'
            certificate={certificadoHarvard}
        />
        <EducationCard
            title="Express Typescript"
            content = "This course covers advanced concepts, features and practical skills in utilizing TypeScript."
            institution='Danki Code'
            certificate={certificadotypescript}
        />
        <EducationCard
            title="React Full Course"
            content = "Course offers a thorough exploration of concepts and practical skills of React in modern web development."
            institution='Danki Code'
            certificate={certificadoReact}
        />
        <EducationCard
            title="Full Next.js"
            content = "Full Next.js Course provide in-depth understanding to build server-side rendered and static websites with React."
            institution='Danki Code'
            certificate={certificadoNext}
        />
        <EducationCard
            title="Node.js Course"
            content = "Node.js Course is designed to provide a deep understanding of Node.js, a powerful JavaScript runtime environment"
            institution='Danki Code'
            certificate={certificadoNode}
        />
       
       
     
      </div>
        

    </div>
  )
}
