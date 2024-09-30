"use client"; 
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function ContactForm() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section className='h-screen'>
      <div className="container mx-auto flex justify-center items-center h-screen px-4">
        <div className="flex flex-col md:flex-row w-full justify-center items-start ">
          <div className="flex-1 flex flex-col h-full justify-center p-4">
            <h3 className='text-4xl md:text-6xl text-white'>Contact us</h3>
            <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]'>
            Our contact information below  
            </p>
            <ul className=' mt-5 md:mt-10 text-white text-xl md:text-2xl'>
              <li className='mb-3 md:mb-5'><a  target="_blank" href="https://google.com"><FontAwesomeIcon  icon={faEnvelope}/> info@makemesites.com</a></li>
              <li className='mb-3 md:mb-5'><a target="_blank" href="https://google.com"><FontAwesomeIcon  icon={faPhone}/> +34612222062</a></li>
              <li className='mb-3 md:mb-5'><a target="_blank" href="https://google.com">Telegram</a></li>
              <li className='mb-3 md:mb-5'><a target="_blank" href="https://google.com">linkedin</a></li>
            </ul>
          </div>





          <div className="flex-1 h-full justify-center p-4">

          <h3 className='text-4xl md:text-6xl text-white'>Or fill the form</h3>

          <div className="flex flex-col">
 <div>
     
     <input
       type="text"
       placeholder="Name"
       autoComplete="new-password"
       className="custom-input mt-1 block w-full    p-2"
     />
   </div>
   <div>
     
     <input
       type="email"
       placeholder="Enter your email"
       autoComplete="new-password"
       className="custom-input mt-1 block bg-transparent w-full   shadow-sm p-2"
     />
   </div>
   <div>
     
     <input
       type="text"
       placeholder="Enter your phone"
       autoComplete="new-password"
       className="custom-input mt-1 block w-full   shadow-sm p-2"
     />
   </div>
   <div>
     
     <input
       type="text"
       placeholder="Message(Optional)"
       autoComplete="new-password"
       className="custom-input mt-1 block w-full    p-2"
     />
   </div>
 </div>
        
      <button onClick={handleClick} className={isClicked ? 'clicked' : ''}>
      <p>{isClicked ? 'Sent!' : 'Send'}</p>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
        xmlSpace="preserve"
      >
        <path
          id="paper-plane-icon"
          d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z
              M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"
        ></path>
      </svg>
    </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
