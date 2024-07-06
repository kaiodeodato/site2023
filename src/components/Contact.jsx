import React, { useEffect } from 'react';
import { GrMail } from "react-icons/gr";
import Button3D from './Button3D';

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

      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-lg w-96 md:w-full h-28 bg-slate-100 m-auto text-2xl text-slate-500'>
        <h1 className='text-center'>Don't be shy! Hit me a Hi!</h1>
        <div className='flex flex-row items-center justify-center w-16 h-16 rounded-full m-auto hover:scale-105 transition-transform duration-700'>


        <Button3D
          className='flex flex-row justify-center items-center p-2 rounded-md font-bold text-gray-100'
          width="100px"
          height="50px"
          borderRadius="10px"
          background=""
          >
          <a id="emailLink" href="mailto:kaiod.oficial@gmail.com">
            <GrMail size={35} className='transition-colors cursor-pointer '/>
          </a>
      </Button3D>

          
        </div>
        <h1 className='text-center'>kaiod.oficial@gmail.com</h1>
      </div>
    </div>
  );
}
