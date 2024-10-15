"use client";
import React, { useState, useEffect } from "react";
import '../custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import DropdownMenu from "./dropdown";
import LangChanger from "./langchanger";

const StickyHeader = ({ lang }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
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
    const sectionIds = ["home", "websites", "apps", "bots", "modules", "partners", "contact"];
    const sections = sectionIds.map(id => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      if (observer) {
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed backdrop-blur-md w-full top-0 z-50 custom-header">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl ">
          <a href="/" className="text-white hover:text-white">MakeMeSites</a>
        </div>

        {!isMobile ? (
          <nav>
            <ul className="flex space-x-6">
              {lang.header.map(({ id, label }) => (
                <li key={id} className="">
                  <Link
                    to={id}
                    className={`text-white cursor-pointer  ${activeSection === id ? 'active_section' : ''}`}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
                 <li>
                  <LangChanger lang={lang}/>
                </li>
            </ul>
          </nav>
        ) : (
          <>
            <FontAwesomeIcon icon={faBars} fontSize={27} color="#fff" onClick={toggleMenu} />
            <div className={`mobile_menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="myclose" onClick={closeMenu}>
                <FontAwesomeIcon icon={faXmark} fontSize={38} color="#fff" />
              </div>
              <ul className="mobile-menu-list mt-6 flex justify-center items-center flex-col h-[70vh]">
                {lang.header.map(({ id, label }) => (
                  <li key={id} className="mt-5">
                    <Link
                      to={id}
                      className={`text-white cursor-pointer text-2xl ${activeSection === id ? 'active_section' : ''}`}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <LangChanger lang={lang}/>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;
