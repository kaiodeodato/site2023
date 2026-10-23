import React from 'react'

export default function EducationCard({ title, content, institution }) {
  return (
    <div className='w-full max-w-[15rem] min-h-[10.5rem] border border-slate-200 bg-slate-50 hover:bg-slate-100 duration-300 grid grid-cols-1 items-center justify-center rounded-xl p-3'>
      <div className='cursor-default flex flex-col items-center justify-center m-auto text-slate-700'>
        <h4 className='text-sm md:text-base font-semibold text-slate-800'>{title}</h4>
        <span className='text-xs md:text-sm text-slate-500 text-center mt-2'>{content}</span>
        <span className='text-sm mt-3 text-slate-600'>{institution}</span>
      </div>
    </div>
  )
}
