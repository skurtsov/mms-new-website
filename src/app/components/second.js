"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import mob from "../img/mob.png";
import laptop from "../img/laptop.png";
import Button from './button';

function Second() {
    const { scrollYProgress } = useViewportScroll();
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false); // Проверка, что рендер на клиенте
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true); // Устанавливаем, что находимся на клиенте
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            const handleResize = () => {
                // Проверка для мобильного устройства (ширина <= 768px)
                setIsMobile(screen.width < 768);
            };

            // Вызов handleResize при первом рендере
            handleResize();

            // Обработчик на изменение размера окна
            window.addEventListener("resize", handleResize);

            // Удаление обработчика при размонтировании компонента
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [isClient]);

    useEffect(() => {
        const handleObserver = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsVisible(true); // Секция на экране
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            threshold: 0.5,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Анимация для десктопа
    const x = useTransform(scrollYProgress, [0, 0.17], [-300, 0]);
    const xReverse = useTransform(scrollYProgress, [0, 0.17], [300, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.17], [0.2, 1]);
    const scaleList = useTransform(scrollYProgress, [0.05, 0.15], [0.8, 1]);

    return (
        <section id="second-section" ref={sectionRef} className="min-h-screen mt-12 md:mt-2 p-4">
            <div className="container mx-auto flex flex-col justify-center items-center mt-10 mb-10 h-full">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Десктоп: Анимация при скролле */}
                    {!isMobile && (
                        <>
                            <motion.div
                                style={{ x }}
                                transition={{ ease: [0.25, 0.1, 0.25, 1] }}
                                className="w-[50%] md:w-[20vw] mb-4 md:mb-0"
                            >
                                <Image src={laptop} alt="Laptop" />
                            </motion.div>
                            <motion.div
                                style={{ x: xReverse }}
                                transition={{ ease: [0.25, 0.1, 0.25, 1] }}
                                className="w-[30%] md:w-[7vw]"
                            >
                                <Image src={mob} alt="Mobile" />
                            </motion.div>
                        </>
                    )}

                    {/* Мобильные устройства: без анимации */}
                    {isMobile && (
                        <>
                            <div className="w-[50%] md:w-[20vw] mb-4 md:mb-0">
                                <Image src={laptop} alt="Laptop" />
                            </div>
                            <div className="w-[30%] md:w-[7vw]">
                                <Image src={mob} alt="Mobile" />
                            </div>
                        </>
                    )}
                </div>
                <div className="mt-8 text-4xl md:text-6xl text-white text-center">
                    {!isMobile ? (
                        <motion.div style={{ scale }}>
                            <h2>Websites development</h2>
                   
                    <h3 className='mt-6 text-lg md:text-2xl text-white'>So why Our websites the best?</h3>
           
                        </motion.div>
                    ) : (<>
                        <h2>Websites development</h2>    
                        <h3 className='mt-6 text-lg md:text-2xl text-white'>So why Our websites the best?</h3>
             
                        </>
                    )}
                </div>
             

                <div className="flex flex-col md:flex-row w-full mt-10">
                    <div className="flex-1 flex flex-col justify-center items-start p-4">
                        {!isMobile ? (
                       
                            <motion.ul className="list-style-custom text-white text-xl md:text-2xl" style={{ scale: scaleList }}>
                                <li className="mb-5">Our websites helps to attract new clients</li>
                                <li className="mb-5">Works on all devices</li>
                                <li className="mb-5">Helps to increase your profit</li>
                                <li className="mb-5">Our prices are lower than competitors</li>
                            </motion.ul>
                        ) : (
                            <ul className="list-style-custom text-white text-xl md:text-2xl">
                                   <li className="mb-5">Our websites helps to attract new clients</li>
                                <li className="mb-5">Works on all devices</li>
                                <li className="mb-5">Helps to increase your profit</li>
                                <li className="mb-5">Our prices are lower than competitors</li>
                            </ul>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-end p-4">
                        {!isMobile ? (
                            <motion.ul className="text-white text-right text-xl md:text-2xl" style={{ scale: scaleList }}>
                              <li className="mb-5">Our websites ready for use in 14 days-</li>
                                <li className="mb-5">Our websites have Full technical support-</li>
                                <li className="mb-5">Our websites have 100% quality guarantee-</li>
                                <li className="mb-5"> Our websites haven't hidden fees-</li>
                            </motion.ul>
                        ) : (
                            <ul className="text-white text-right text-xl md:text-2xl">
                                <li className="mb-5">Our websites help earn money -</li>
                                <li className="mb-5">Our websites help get new clients -</li>
                                <li className="mb-5">Our websites are fully adaptive -</li>
                                <li className="mb-5">Our websites have competitive prices -</li>
                            </ul>
                        )}
                    </div>
                </div>
                <Button text={"Consult me"} />
            </div>
        </section>
    );
}

export default Second;
