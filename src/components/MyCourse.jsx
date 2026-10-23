import React from 'react'

export default function MyCourse({ title, content, certificate}) {
  return (
    <div className='w-full max-w-[15rem] min-h-[10.5rem] border border-orange-200 bg-orange-50/60 hover:bg-orange-50 duration-300 grid grid-cols-1 items-center justify-center rounded-xl p-3'>
      <div className='cursor-default flex flex-col items-center justify-center m-auto text-slate-700 p-1'>
        <h4 className='text-sm md:text-base font-semibold text-slate-800'>{title}</h4>
        <span className='text-xs md:text-sm text-slate-500 text-center mt-2'>{content}</span>
        <a
          className='flex flex-row items-center justify-center text-orange-800 mt-3 text-sm font-medium hover:underline'
          target='_blank'
          rel="noreferrer"
          href={certificate}
        >
          Course link
        </a>
      </div>
    </div>
  )
}
