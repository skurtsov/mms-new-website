"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import appimg from "../img/app1.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Apps({ lang }) {
  const { scrollYProgress } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Проверяем размеры экрана при первой загрузке
    handleResize();

    // Инициализация AOS для мобильных устройств
    AOS.init();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 0.3], [-700, 0]); 
  const xReverse = useTransform(scrollYProgress, [0, 0.3], [700, 0]);

  // Переменные для заголовков и описаний
  const title = lang.apps.title || "Mobile Applications";
  const subtitle = lang.apps.subtitle || "We produce modern and rentable mobile apps for small and medium businesses";
  const secondSub = lang.apps.second_sub || "So why our apps are good";
  const features = lang.apps.features || [
    "Your APP return on investment less than 1 year",
    "iOS/Android support",
    "Published on App Store and Google Play",
    "Full technical support"
  ];

  return (
    <section id="apps" className='min-h-screen py-16 md:py-24'>
      <div className="container mx-auto flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row w-full">
          {/* Десктоп: с анимацией */}
          {!isMobile && (
            <>
              <motion.div style={{ x }}>
                <div className="flex-1 flex flex-col justify-center p-4">
                  <h3 className='text-4xl md:text-6xl text-white'>{title}</h3>
                  <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]'>
                    {subtitle}
                  </p>
                  <p className='text-white text-xl md:text-2xl mt-9'>{secondSub}</p>
                  <ul className='list-style-custom mt-5 md:mt-10 text-white text-xl md:text-2xl'>
                    {features.map((feature, index) => (
                      <li key={index} className='mb-3 md:mb-5'>{feature}</li>
                    ))}
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
                  <Image src={appimg} alt="Mobile applications" className="w-full h-auto max-w-[350px] md:max-w-none mx-auto" />
              </div>
              <div className="flex-1 flex flex-col h-full justify-center p-4">
                <h3 className='text-4xl md:text-6xl text-white text-center md:text-left' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  {title}
                </h3>
                <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  {subtitle}
                </p>
                <p className='text-white text-xl md:text-2xl mt-9' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                  {secondSub}
                </p>
                <ul className='list-style-custom mt-5 md:mt-10 text-white text-xl md:text-2xl'>
                  {features.map((feature, index) => (
                    <li key={index} className='mb-3 md:mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                      {feature}
                    </li>
                  ))}
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
