import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Muda após 50px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-blue-500 shadow-lg" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Empresa</h1>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-gray-200 cursor-pointer">Sobre</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Serviços</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Contato</li>
        </ul>
      </div>
    </nav>
  );
}
