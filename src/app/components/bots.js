"use client"; 
import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import appimg from "../img/bot.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Bots() {
  const { scrollYProgress } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false); // Проверка, что рендер на клиенте

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Устанавливаем, что находимся на клиенте
    }
    AOS.init();
  }, []);

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
  }, [isClient]);

  // Анимации для десктопа
  const yImage = useTransform(scrollYProgress, [0, 0.5], [600, 0]); // Изображение движется вверх
  const yText = useTransform(scrollYProgress, [0, 0.5], [-600, 0]); // Текст движется вниз

  return (
    <section id="bots" className='min-h-screen py-12 md:py-24'>
      <div className="container mx-auto flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row w-full">
          {/* Десктоп: с анимацией */}
          {!isMobile && (
            <>
              <motion.div style={{ y: yImage }} className="flex-1 h-full items-start justify-start p-4">
                <Image src={appimg} alt="Mobile applications" />
              </motion.div>
              <motion.div style={{ y: yText }} className="flex-1 flex flex-col h-full justify-center p-4">
                <h3 className='text-4xl md:text-6xl text-white text-center md:text-left'>Bot's for business</h3>
                <p className='text-white text-2xl mt-5 w-[80%]'>We produce modern and rentable mobile apps for small and medium businesses</p>
                <p className='text-white text-2xl mt-9'>So why our apps are good</p>
                <ul className='list-style-custom mt-10 text-white text-2xl'>
                  <li className='mb-5'>Our websites help earn money</li>
                  <li className='mb-5'>Our websites help get new clients</li>
                  <li className='mb-5'>Our websites are fully adaptive</li>
                  <li className='mb-5'>Our websites have competitive prices</li>
                </ul>
              </motion.div>
            </>
          )}

          {/* Мобильные устройства: добавлены анимации */}
          {isMobile && (
            <>
              <div className="flex-1 h-full items-start justify-start p-4" 
                   data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                <Image src={appimg} alt="Mobile applications" />
              </div>
              <div className="flex-1 flex flex-col h-full justify-center p-4">
                <h3 className='text-4xl md:text-6xl text-white text-center md:text-left' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  Bot's for business
                </h3>
                <p className='text-white text-2xl mt-5 w-[100%] text-center' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  We produce modern and rentable mobile apps for small and medium businesses
                </p>
                <p className='text-white text-2xl mt-9' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  So why our apps are good
                </p>
                <ul className='list-style-custom mt-10 text-white text-2xl'>
                  <li className='mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">Our websites help earn money</li>
                  <li className='mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">Our websites help get new clients</li>
                  <li className='mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">Our websites are fully adaptive</li>
                  <li className='mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">Our websites have competitive prices</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Bots;
