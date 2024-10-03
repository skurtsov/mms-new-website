"use client";
import React, { useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Button from './button';
import AOS from 'aos';
import 'aos/dist/aos.css';
function ModulesDev() {
    useEffect(()=>{
        AOS.init()
    },[])
    const { scrollYProgress } = useViewportScroll();

    // Вращение шестеренок в зависимости от прокрутки
    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 1600]); // 10 полных оборотов
    const rotateZReverse = useTransform(scrollYProgress, [0, 1], [0, -1600]); // Обратные 10 оборотов

    return (
        <section id="modules" className='min-h-screen p-4'>
            <div className="container mx-auto flex flex-col justify-center items-center m-[10vh] min-h-screen">
                <div className='flex flex-row'>
                    <motion.div style={{ rotateZ }} className="flex-1 h-[130px]">
                        <FontAwesomeIcon fontSize={140} color="#fff" icon={faGear} />
                    </motion.div>
                    <motion.div style={{ rotateZ: rotateZReverse }} className="flex-1 h-[130px]">
                        <FontAwesomeIcon fontSize={100} color="#fff" icon={faGear} />
                    </motion.div>
                </div>
                <div className="mt-8 text-center">
                    <h2 className='text-4xl md:text-6xl text-white' 
                        data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                        Websites development
                    </h2>
                    <h3 className='mt-6 text-lg md:text-2xl text-white' 
                        data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                        Our unique technology of re-usable modules can reduce the price of software up to 3 times<br />
                        You can start using our module technologies for your personal project, or resell it with a 300% margin
                    </h3>
                </div>

                {/* Контейнер цен */}
                <div className='text-white text-center text-lg md:text-2xl w-full mt-8'>
                    {Array(3).fill().map((_, index) => (
                        <div className="flex flex-col md:flex-row w-full mt-6 md:mt-10" key={index}>
                            <div className="flex-1 flex flex-col justify-center items-center p-4">
                                <h1 className='text-xl md:text-3xl' 
                                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                                    Standard website price
                                </h1>
                                <h3 className='text-lg md:text-2xl' 
                                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                                    900$
                                </h3>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center p-4">
                                <h1 className='text-xl md:text-3xl' 
                                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                                    Moduled website price
                                </h1>
                                <h3 className='text-lg md:text-2xl' 
                                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                                    300$
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-8' 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
                    <Button text={"Consult me"} />
                </div>
            </div>
        </section>
    );
}

export default ModulesDev;
