import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  return (
    <nav className="bg-pink-200">
      <div className="md:mx-20 text-white p-4 flex justify-between items-center">
        <img
          src="./logo_2_prev_ui.png"
          className="h-16 w-32 aspect-auto rounded"
          alt="Logo"
        />

        <button
          className="text-pink-600 text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } fixed top-[98px] right-0 bg-pink-200 text-pink-600 font-medium flex flex-col items-center gap-6 p-4 text-md md:static md:flex md:flex-row md:gap-4 md:text-base`}
        >
          <li>
            <Link to="/" onClick={closeMenu} className="text-2xl font-bold font-comic">
              Home
            </Link>
          </li>
          <li>
          <Link to="/#about">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-bold font-comic"
            >
              About Me
            </button>
            </Link>
          </li>
          <li>
          <Link to="/#photos">
            <button
              onClick={() => scrollToSection("photos")}
              className="text-2xl font-bold font-comic"
            >
              Photos
            </button>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="text-2xl font-bold font-comic">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
