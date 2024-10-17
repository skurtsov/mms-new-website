"use client"; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm({ lang }) {
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const handleClick = async () => {
    setIsClicked(true);

    try {
      // Преобразуем данные в формат x-www-form-urlencoded
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('email', email);
      params.append('phone', phone);
      params.append('message', message);

      const response = await axios.post('https://makemesites.com/sendmail.php', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending form:', error);
    } finally {
      setIsClicked(false);
    }
  };

  return (
    <section id="contact" className='h-screen'>
      <div className="container mx-auto flex justify-center items-center h-screen px-4">
        <div className="flex flex-col md:flex-row w-full justify-center items-start">
          
          {/* Левая часть: контактная информация с анимацией слева */}
          <div className="flex-1 flex flex-col h-full justify-center p-4" data-aos="fade-left">
            <h3 className='text-4xl md:text-6xl text-white'>{lang.contact.title}</h3>
            <p className='text-white text-xl md:text-2xl mt-5 w-full md:w-[80%]'>
              {lang.contact.subtitle}
            </p>
            <ul className='mt-5 md:mt-10 text-white text-xl md:text-2xl'>
              <li className='mb-3 md:mb-5'>
                <a target="_blank" rel="noopener noreferrer" href="https://google.com">
                  <FontAwesomeIcon icon={faEnvelope} /> info@makemesites.com
                </a>
              </li>
              <li className='mb-3 md:mb-5'>
                <a target="_blank" rel="noopener noreferrer" href="https://google.com">
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
            <div className="flex flex-col">
              <div>
                <input
                  type="text"
                  placeholder={lang.contact.placeholder[0]}
                  autoComplete="new-password"
                  className="custom-input mt-1 block w-full p-2"
                  onChange={(t) => setName(t.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={lang.contact.placeholder[1]}
                  autoComplete="new-password"
                  className="custom-input mt-1 block bg-transparent w-full shadow-sm p-2"
                  onChange={(t) => setEmail(t.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={lang.contact.placeholder[2]}
                  autoComplete="new-password"
                  className="custom-input mt-1 block w-full shadow-sm p-2"
                  onChange={(t) => setPhone(t.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={lang.contact.placeholder[3]}
                  autoComplete="new-password"
                  className="custom-input mt-1 block w-full p-2"
                  onChange={(t) => setMessage(t.target.value)}
                />
              </div>
            </div>
            <button onClick={handleClick} className={isClicked ? 'clicked' : ''}>
              <p>{isClicked ? lang.contact.button_sent : lang.contact.button_text}</p>
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
