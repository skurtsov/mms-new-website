"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import appimg from "../img/app1.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Apps() {
  const { scrollYProgress } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);



  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        setIsMobile(screen.width < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

      AOS.init();
   
  }, [isClient]);

  const x = useTransform(scrollYProgress, [0, 0.3], [-700, 0]); 
  const xReverse = useTransform(scrollYProgress, [0, 0.3], [700, 0]);

  return (
    <section id="apps" className='min-h-screen py-16 md:py-24'>
      <div className="container mx-auto flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row w-full">
          {/* Десктоп: с анимацией */}
          {!isMobile && (
            <>
              <motion.div style={{ x }}>
                <div className="flex-1 flex flex-col justify-center p-4">
                  <h3 className='text-4xl md:text-6xl text-white'>Mobile Applications</h3>
                  <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]'>
                    We produce modern and rentable mobile apps for small and medium businesses
                  </p>
                  <p className='text-white text-xl md:text-2xl mt-9'>So why our apps are good</p>
                  <ul className='list-style-custom mt-5 md:mt-10 text-white text-xl md:text-2xl'>
                    <li className='mb-3 md:mb-5'>Your APP return on investment less than 1 year</li>
                    <li className='mb-3 md:mb-5'>iOS/Android support</li>
                    <li className='mb-3 md:mb-5'>Published on App Store and Google Play</li>
                    <li className='mb-3 md:mb-5'>Full technical support</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div style={{ x: xReverse }}>
                <div className="flex-1 justify-center p-4">
                  <Image src={appimg} alt="Mobile applications" className="w-full h-auto max-w-[350px] md:max-w-none mx-auto" />
                </div>
              </motion.div>
            </>
          )}

          {/* Мобильные устройства: добавлены анимации */}
          {isMobile && (
            <>
              <div className="flex-1 h-full items-start justify-start p-4" 
                   data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                <motion.div>
                  <Image src={appimg} alt="Mobile applications" className="w-full h-auto max-w-[350px] md:max-w-none mx-auto" />
                </motion.div>
              </div>
              <div className="flex-1 flex flex-col h-full justify-center p-4">
                <h3 className='text-4xl md:text-6xl text-white text-center md:text-left' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  Mobile Applications
                </h3>
                <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  We produce modern and rentable mobile apps for small and medium businesses
                </p>
                <p className='text-white text-xl md:text-2xl mt-9' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  So why our apps are good
                </p>
                <ul className='list-style-custom mt-5 md:mt-10 text-white text-xl md:text-2xl'>
                  <li className='mb-3 md:mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                    Your APP return on investment less than 1 year
                  </li>
                  <li className='mb-3 md:mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                    iOS/Android support
                  </li>
                  <li className='mb-3 md:mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                    Published on App Store and Google Play
                  </li>
                  <li className='mb-3 md:mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                    Full technical support
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Apps;
