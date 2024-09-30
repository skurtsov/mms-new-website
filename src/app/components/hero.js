"use client"; 
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import logo from "../img/logo.png"


const textLines = [
  "New generation of ",
  "Software solutions  ",
  "For your business",
  "It's MakeMeSites"
];

function Hero() {
  return (
    <section className='h-screen'>
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row w-full ">
          <div className="flex-1 flex flex-col justify-center	 p-4">
            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ translateX: '-100vw' }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                style={{
                  color: '#fff',
                  fontSize: 'clamp(1.5rem, 5vw, 3rem)'
                }}
              >
                <h1>{line}                

                </h1>

              </motion.div>
            ))}
          </div>
          <div className="flex-1 overflow-hidden p-4">
          <motion.div initial={{ translateY: '100vw' }}
                animate={{ translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5}}>
            <Image src={logo}/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
