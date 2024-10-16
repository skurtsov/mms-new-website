"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import '../mobile.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#04105d',
    border: '3px solid white',
    width: '30vw',
    overflowX: 'hidden',
  },
};

function Button({ text, lang }) {
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Останавливаем отправку формы по умолчанию
    setIsClicked(true);

    try {
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
      closeModal();
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AnimatePresence>
          {modalIsOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                <div className="flex flex-col">
                  <h3 className='text-white text-center text-2xl'>{lang.contact.title_form}</h3>
                  <div>
                    <input
                      type="text"
                      placeholder={lang.contact.placeholder[0]}
                      autoComplete="new-password"
                      className="custom-input mt-1 block w-full p-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={lang.contact.placeholder[1]}
                      autoComplete="new-password"
                      className="custom-input mt-1 block bg-transparent w-full shadow-sm p-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={lang.contact.placeholder[2]}
                      autoComplete="new-password"
                      className="custom-input mt-1 block w-full shadow-sm p-2"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={lang.contact.placeholder[3]}
                      autoComplete="new-password"
                      className="custom-input mt-1 block w-full p-2"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit" className={isClicked ? 'clicked' : ''}>
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
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
      <div
        className='cursor-pointer bg-transparent hover:bg-white text-white hover:text-secondary py-4 px-16 border-2 border-white hover:border-transparent rounded-full mt-6'
        onClick={openModal}
      >
        {text}
      </div>
    </div>
  );
}

export default Button;
