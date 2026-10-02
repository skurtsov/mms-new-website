"use client";
import React, { useEffect } from 'react';
import InquiryForm from './InquiryForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm({ lang }) {
  useEffect(() => { AOS.init({ duration: 2000, once: false }); }, []);

  return (
    <section id="contact" className='contact-section'>
      <div className="container mx-auto flex justify-center items-center min-h-screen py-16 px-4">
        <div className="flex flex-col md:flex-row w-full justify-center items-start">

          {/* Левая часть: контактная информация с анимацией слева */}
          <div className="flex-1 flex flex-col h-full justify-center p-4" data-aos="fade-left">
            <h3 className='text-4xl md:text-6xl text-white'>{lang.contact.title}</h3>
            <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]'>
              {lang.contact.subtitle}
            </p>
            <ul className='mt-5 md:mt-10 text-white text-xl md:text-2xl'>
              <li className='mb-3 md:mb-5'>
                <a target="_blank" rel="noopener noreferrer" href="mailto:info@makemesites.com">
                  <FontAwesomeIcon icon={faEnvelope} /> info@makemesites.com
                </a>
              </li>
              <li className='mb-3 md:mb-5'>
                <a target="_blank" rel="noopener noreferrer" href="tel:+34612222062">
                  <FontAwesomeIcon icon={faPhone} /> +34612222062
                </a>
              </li>
              <li className='mb-3 md:mb-5'>
                <a target="_blank" rel="noopener noreferrer" href="https://t.me/simkurt"><FontAwesomeIcon className="mr-2" icon={faTelegram}/>Telegram</a>
              </li>
              <li className='mb-3 md:mb-5'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/102343712/"><FontAwesomeIcon className="mr-4" icon={faLinkedin}/>LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Правая часть: форма с анимацией справа */}
          <div className="flex-1 h-full justify-center p-4" data-aos="fade-right">
            <h3 className='text-4xl md:text-6xl text-white'>{lang.contact.title_form}</h3>
            <InquiryForm lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
