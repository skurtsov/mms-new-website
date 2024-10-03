"use client";
import React from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import '../mobile.css'
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
    border:'3px solid white',
    width:'30vw',
    overflowX:'hidden',

  },
};

function Button({ text }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Исправлено здесь
    setIsClicked(!isClicked);
  };
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle;

    React.useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
                              <form className="space-y-6"  autoComplete="off">
 

 <div className="flex flex-col">
  <h3 className='text-white text-center text-2xl'>Fill the form and we will<br/> contact you soon</h3>
 <div>
     
     <input
       type="text"
       placeholder="Name"
       autoComplete="new-password"
       className="custom-input mt-1 block w-full    p-2"
     />
   </div>
   <div>
     
     <input
       type="email"
       placeholder="Enter your email"
       autoComplete="new-password"
       className="custom-input mt-1 block bg-transparent w-full   shadow-sm p-2"
     />
   </div>
   <div>
     
     <input
       type="text"
       placeholder="Enter your phone"
       autoComplete="new-password"
       className="custom-input mt-1 block w-full   shadow-sm p-2"
     />
   </div>
   <div>
     
     <input
       type="text"
       placeholder="Message(Optional)"
       autoComplete="new-password"
       className="custom-input mt-1 block w-full    p-2"
     />
   </div>
   <button onClick={handleClick} className={isClicked ? 'clicked' : ''}>
      <p>{isClicked ? 'Sent!' : 'Send'}</p>
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



 <div className="flex justify-start mt-12">

 </div>
</form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Modal>
            <div
                className='bg-transparent hover:bg-white text-white hover:text-secondary py-4 px-16 border-2 border-white hover:border-transparent rounded-full mt-6'
                onClick={openModal}
            >
                {text}
            </div>
        </div>
    );
}

export default Button;
