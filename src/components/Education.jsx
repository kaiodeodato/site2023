import React from 'react'
import EducationCard from './EducationCard';
import MyCourse from './MyCourse';

import certificadoHarvard from "../assets/certificadoHarvard.pdf"
import certificadoMern from "../assets/certificadoMern.pdf"
import certificadotypescript from "../assets/certificadotypescript.pdf"
import certificadoReact from "../assets/certificadoReact.pdf"
import certificadoNext from "../assets/certificadoNext.pdf"
import certificadoNode from "../assets/certificadoNode.pdf"


export default function Education() {
  return (
    <div id='education' className='container grid grid-col-3 items-center justify-center mt-14 m-auto ' >
      
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-20 p-2'>

        <div className='relative shadow-lg container w-44 md:w-60 h-52 bg-slate-800 flex flex-col items-center justify-center rounded-3xl '>
          <h1 className=' text-slate-600 text-center font-bold text-4xl'>Education</h1>
          <h1 className=' text-slate-600 text-center font-bold text-2xl'>( Attended )</h1>
        </div>

        <EducationCard
            title="Mern Stack"
            content = "The course provided a solid understanding of MongoDB, Express, React, and Node - Known as the MERN stack."
            institution='Danki Code'
            // certificate={certificadoMern}
        />
        <EducationCard
            title="CS50 Computer Science"
            content = "Introduction of computer science and the art of programming and teaching C, Python, SQL, JavaScript."
            institution='Harvard University'
            // certificate={certificadoHarvard}
        />
        <EducationCard
            title="Bigdata with python"
            content = "Master programming to solve problems related to data architecture and bigData using Python"
            institution='Tokio School'
            // certificate={certificadotypescript}
        />
        <EducationCard
            title="React Full Course"
            content = "Course offers a thorough exploration of concepts and practical skills of React in modern web development."
            institution='FreeCodeCamp'
            // certificate={certificadoReact}
        />
        <EducationCard
            title="Full Next.js"
            content = "Full Next.js Course provide in-depth understanding to build server-side rendered and static websites with React."
            institution='Danki Code'
            // certificate={certificadoNext}
        />
        <EducationCard
            title="Node.js Course"
            content = "Node.js Course is designed to provide a deep understanding of Node.js, a powerful JavaScript runtime environment"
            institution='Danki Code'
            // certificate={certificadoNode}
        />
        <div className='relative shadow-lg container w-44 md:w-60 h-52 bg-slate-800 flex flex-col items-center justify-center rounded-3xl '>
          <h1 className=' text-slate-600 text-center font-bold text-4xl'>Education</h1>
          <h1 className=' text-slate-600 text-center font-bold text-2xl'>( Conducted )</h1>
        </div>
       <MyCourse 
            title="MongoDB Complete"
            content = "Complete course on mongoDB provided to a large Brazilian online course platform."
            institution='Danki Code'
            certificate="https://cursos.dankicode.com/curso-mongodb"
        />
       
     
      </div>
    </div>
  )
}
