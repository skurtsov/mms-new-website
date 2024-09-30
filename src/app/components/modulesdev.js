"use client";
import React from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";

function ModulesDev() {
    const { scrollYProgress } = useViewportScroll();

    // Вращение шестеренок в зависимости от прокрутки
    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 1600]); // 10 полных оборотов
    const rotateZReverse = useTransform(scrollYProgress, [0, 1], [0, -1600]); // Обратные 10 оборотов

    return (
        <section className='min-h-screen p-4'>
            <div className="container mx-auto flex flex-col justify-center items-center m-[10vh] min-h-screen">
            <div className='flex flex-row'>
                    <motion.div style={{ rotateZ }}  className="flex-1 h-[130px]">
                        <FontAwesomeIcon fontSize={140} color="#fff" icon={faGear} />
                    </motion.div>
                    <motion.div style={{ rotateZ: rotateZReverse }} className="flex-1 h-[130px]">
                        <FontAwesomeIcon fontSize={100} color="#fff" icon={faGear} />
                    </motion.div>
                </div>
                <div className="mt-8 text-center">
                    <h2 className='text-4xl md:text-6xl text-white'>Websites development</h2>
                    <h3 className='mt-6 text-lg md:text-2xl text-white'>
                        Our unique technology of re-usable modules can reduce the price of software up to 3 times<br />
                        You can start using our module technologies for your personal project, or resell it with a 300% margin
                    </h3>
                </div>

                {/* Контейнер цен */}
                <div className='text-white text-center text-lg md:text-2xl w-full mt-8'>
                    {Array(3).fill().map((_, index) => (
                        <div className="flex flex-col md:flex-row w-full mt-6 md:mt-10" key={index}>
                            <div className="flex-1 flex flex-col justify-center items-center p-4">
                                <h1 className='text-xl md:text-3xl'>Standard website price</h1>
                                <h3 className='text-lg md:text-2xl'>900$</h3>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center p-4">
                                <h1 className='text-xl md:text-3xl'>Moduled website price</h1>
                                <h3 className='text-lg md:text-2xl'>300$</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-8'>
                    <button className='bg-transparent hover:bg-white text-white hover:text-secondary py-2 md:py-4 px-8 md:px-16 border-2 border-white hover:border-transparent rounded-full'>
                        I want it
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ModulesDev;
