"use client";
import React from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

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

  },
};

function Button({ text }) {
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
