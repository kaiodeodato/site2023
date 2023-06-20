import React, { useEffect } from 'react';
import { GrMail } from "react-icons/gr";

export default function Contact() {
  useEffect(() => {
    const handleClick = () => {
      const subject = encodeURIComponent('Hello Kaio!');
      const body = encodeURIComponent(`My name is Mr/Mrs ..., I was taking I look at your portfolio and ...
      `);
      const emailLink = document.getElementById('emailLink');
      emailLink.href = `mailto:kaiod.oficial@gmail.com?subject=${subject}&body=${body}`;
    };

    const emailLink = document.getElementById('emailLink');
    emailLink.addEventListener('click', handleClick);

    return () => {
      emailLink.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id='contact' className='container grid grid-cols-1 gap-4 items-center justify-center mt-20 m-auto'>
      <h1 className='pt-3 text-slate-600 text-center font-bold text-4xl'>Contact</h1>

      <div className='shadow-lg grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-lg w-96 md:w-full h-40 bg-slate-300 m-auto text-2xl text-slate-500'>
        <h1 className='text-center'>Don't be shy! Hit me a Hi!</h1>
        <div className='shadow-md flex flex-row items-center justify-center bg-slate-100 w-16 h-16 rounded-full m-auto hover:scale-105 transition-transform duration-700'>
          <a id="emailLink" href="mailto:kaiod.oficial@gmail.com">
            <GrMail size={35} className='transition-colors cursor-pointer text-orange-900 hover:text-blue-900 mx-2'/>
          </a>
        </div>
        <h1 className='text-center'>kaiod.oficial@gmail.com</h1>
      </div>
    </div>
  );
}
