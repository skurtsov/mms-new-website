"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import InquiryForm from './InquiryForm';
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
  const [modalIsOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    Modal.setAppElement('#site-content');
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
        contentLabel={lang.contact.title_form_modal}
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
              <h3 className="text-white text-center text-2xl my-6">{lang.contact.title_form_modal}</h3>
              <InquiryForm lang={lang} />
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
