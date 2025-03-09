import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}>
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <div>
          <a href="#intro">
            <img src="assets/images/logo.png" alt="logo" width={150} />
          </a>
        </div>
        {/* Botão do hambúrguer (visível apenas em telas pequenas) */}
        <button className="text-white block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {/* Menu de navegação (seção para mobile que ocupa toda a tela) */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-full h-full bg-black opacity-96 md:hidden flex flex-col justify-center items-center space-y-6 transform transition-transform duration-500`}>
          <ul className="text-white space-y-6">
            <li className="hover:text-gray-200 cursor-pointer text-3xl">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li className="hover:text-gray-200 cursor-pointer text-3xl">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
            </li>
            <li className="hover:text-gray-200 cursor-pointer text-3xl" onClick={() => setIsMenuOpen(false)}>
              <a href="#reviews">Reviews</a>
            </li>
            <li className="hover:text-gray-200 cursor-pointer text-3xl" onClick={() => setIsMenuOpen(false)}>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <button className="absolute top-4 right-6 text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
            &times;
          </button>
        </div>

        {/* Menu de navegação para desktop */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
