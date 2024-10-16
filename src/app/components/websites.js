"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import mob from "../img/mob-img.png";
import laptop from "../img/laptop-img.png";
import Button from './button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импортируйте CSS AOS




function Websites({lang}) {
    const { scrollYProgress } = useViewportScroll();
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false); 
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true);
        }
        AOS.init(); // Инициализация AOS

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

    useEffect(() => {
        const handleObserver = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
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

    const x = useTransform(scrollYProgress, [0, 0.17], [-300, 0]);
    const xReverse = useTransform(scrollYProgress, [0, 0.17], [300, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.17], [0.2, 1]);
    const scaleList = useTransform(scrollYProgress, [0.05, 0.15], [0.8, 1]);

    return (
        <section id="websites" ref={sectionRef} className="min-h-screen mt-12 md:mt-2 p-4">
            <div className="container mx-auto flex flex-col justify-center items-center mt-10 mb-10 h-full">
                <div className="flex flex-col md:flex-row items-center">
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

                    {isMobile && (
                        <>
                            <div className="w-[50%] md:w-[20vw] mb-4 md:mb-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">
                                <Image src={laptop} alt="Laptop" />
                            </div>
                            <div className="w-[30%] md:w-[7vw]" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">
                                <Image src={mob} alt="Mobile" />
                            </div>
                        </>
                    )}
                </div>

                {/* Заголовок и подзаголовок с анимацией */}
                <div className="mt-8 text-4xl md:text-6xl text-white text-center">
                    {!isMobile ? (
                        <motion.div style={{ scale }}>
                            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{lang.webdev.title}</h2>
                            <h3 className='mt-6 text-lg md:text-2xl text-white' data-aos="fade-up" data-aos-duration="800" data-aos-once="false">So why Our websites the best?</h3>
                        </motion.div>
                    ) : (
                        <>
                            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-once="false">Websites development</h2>
                            <h3 className='mt-6 text-lg md:text-2xl text-white' data-aos="fade-up" data-aos-duration="800" data-aos-once="false">So why Our websites the best?</h3>
                        </>
                    )}
                </div>

                <div className="flex flex-col md:flex-row w-full mt-10">
                    <div className="flex-1 flex flex-col justify-center items-start p-4">
                        {!isMobile ? (
                            <motion.ul className="list-style-custom text-white text-xl md:text-2xl" style={{ scale: scaleList }}>
                                <li className="mb-5">{lang.webdev.features.left[0]}</li>
                                <li className="mb-5">{lang.webdev.features.left[1]}</li>
                                <li className="mb-5">{lang.webdev.features.left[2]}</li>
                                <li className="mb-5">{lang.webdev.features.left[3]}</li>
                            </motion.ul>
                        ) : (
                            <ul className="list-style-custom text-white text-xl md:text-2xl">
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{lang.webdev.features.left[0]}</li>
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{lang.webdev.features.left[1]}</li>
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{lang.webdev.features.left[2]}</li>
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{lang.webdev.features.left[3]}</li>
                            </ul>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-end p-4">
                        {!isMobile ? (
                            <motion.ul className="text-white text-right text-xl md:text-2xl" style={{ scale: scaleList }}>
                                <li className="mb-5">{lang.webdev.features.right[0]}-</li>
                                <li className="mb-5">{lang.webdev.features.right[1]}-</li>
                                <li className="mb-5">{lang.webdev.features.right[2]}-</li>
                                <li className="mb-5">{lang.webdev.features.right[3]}-</li>
                            </motion.ul>
                        ) : (
                            <ul className="text-white text-left md:text-right text-xl md:text-2xl">
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">-{lang.webdev.features.right[0]}</li>
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">-{lang.webdev.features.right[1]} </li>
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">-{lang.webdev.features.right[2]}</li>
                                <li className="mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">-{lang.webdev.features.right[3]} </li>
                            </ul>
                        )}
                    </div>
                </div>
                
                {/* Кнопка с анимацией */}
                <div className="mt-6">
                    {!isMobile ? (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button text={"Consult me"} lang={lang}/>
                            </motion.div>
                    ) : (
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-once="false">
                            <Button text={"Consult me"} lang={lang}/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Websites
