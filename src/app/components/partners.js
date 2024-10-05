"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import ecogroupImage from '../img/partners/ecogroups.png';
import accentImage from '../img/partners/accent1.png';
import deluxeImage from '../img/partners/logodeluxe.png';
import koloImage from '../img/partners/kolo.png';
import movieImage from '../img/partners/movie.jpg';
import remiImage from '../img/partners/logoremi.png';
import cafeImage from '../img/partners/cafe.png';
import hypeImage from '../img/partners/hype.png';
import swapImg from '../img/partners/swap.png';
import Modal from 'react-modal';

const partners = [
  { href: 'https://ecogroupbcn.com/', src: ecogroupImage, alt: 'Ecogroup' },
  { href: 'https://income-service.com/', src: accentImage, alt: 'Income service' },
  { href: 'https://deluxe-signature.com/', src: deluxeImage, alt: 'Deluxe Signature' },
  { href: 'https://kolomarket.com.ua/', src: koloImage, alt: 'Kolo' },
  { href: 'https://t.me/TheMovieNerd_bot', src: movieImage, alt: 'Movie Nerd' },
  { href: 'https://swap-line.com/', src: hypeImage, alt: 'Hype Exchange' },
    //Modal
    { href: '#', src: swapImg, alt: 'Remi' }, 
    //Modal
    { href: '#', src: cafeImage, alt: 'Cafe' },
];

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'absolute',
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
    height: '30vh', // Задайте нужную высоту или оставьте auto
    maxHeight: '80vh', // Ограничьте максимальную высоту, чтобы предотвратить переполнение
    overflowY: 'auto', // Добавьте прокрутку, если содержимое превышает высоту
    outline:'none',
  },
};

const PartnersGrid = ({lang}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
      offset: 200, // Offset to trigger animations earlier or later
    });
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
    console.log('modal opened')
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="py-10 mb-[10vh]" id="partners">
      <div className="container mx-auto">
        <h2 className="text-6xl text-white text-center mb-8 mt-12">{lang.partners.title}</h2>
        <div className="flex flex-wrap gap-4">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href === '#' ? undefined : partner.href} // Prevent default if href is #
              onClick={partner.href === '#' ? openModal : undefined} // Open modal for specific cards
              target={partner.href !== '#' ? "_blank" : undefined} // Open link in new tab if not modal
              rel="noopener noreferrer"
              className=" cursor-pointer flex-1 min-w-[100%] sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1rem)] p-4 border border-gray-300 bg-gray-200 hover:bg-white transition-all duration-300 relative"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="flex items-center justify-center h-48 relative">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  layout="fill"
                  objectFit="contain"
                  className="filter grayscale transition-all duration-300 hover:filter-none"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project in Development"
        className="modal flex items-center justify-center"
        style={customStyles}
        ariaHideApp={false} // Set to false if you want to disable accessibility warnings for the modal
      >
        <h2 className='text-white text-2xl'>Проект в стадии разработки</h2>
      </Modal>
    </section>
  );
};

export default PartnersGrid;
