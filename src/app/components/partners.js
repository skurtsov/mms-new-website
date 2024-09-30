"use client";
import { useEffect } from 'react';
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



const partners = [
  { href: 'https://ecogroupbcn.com/', src: ecogroupImage, alt: 'Ecogroup' },
  { href: '#', src: accentImage, alt: 'Accent' },
  { href: 'https://deluxe-signature.com/', src: deluxeImage, alt: 'Deluxe Signature' },
  { href: 'https://kolomarket.com.ua/', src: koloImage, alt: 'Kolo' },
  { href: 'https://t.me/TheMovieNerd_bot', src: movieImage, alt: 'Movie Nerd' },
  { href: 'http://google.com', src: remiImage, alt: 'Remi' },
  { href: 'https://play.google.com/store/apps/details?id=com.skurtsov.Waiter', src: cafeImage, alt: 'Cafe' },
  { href: 'https://hype-exchange.com/', src: hypeImage, alt: 'Hype Exchange' },
];

const PartnersGrid = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
      offset: 200, // Offset to trigger animations earlier or later
    });
  }, []);
  return (
    <section className="py-10 " id="partners">
      <div className="container mx-auto">
        <h2 className="text-6xl text-white text-center mb-8 mt-12">Our Clients</h2>
        <div className="flex flex-wrap gap-4">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100%] sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1rem)] p-4 border border-gray-300 bg-gray-200 hover:bg-white transition-all duration-300 relative"
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
    </section>
  );
};

export default PartnersGrid;
