import { useEffect, useState } from "react";
import logo from "../../public/logo.png";

const Header = ({ isScrolled }) => {
  const [active, setActive] = useState("");
  const [isNotMobile, setIsNotMobile] = useState(false);

  const handleScroll = () => {
    const sections = ["home", "about", "categories", "contact"];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsNotMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${isScrolled ? "bg-dark-gray" : "bg-black"} ${
        !isNotMobile ? "flex" : "hidden"
      } flex items-center justify-between fixed w-full px-8 py-3 z-20 transition-all duration-500 easy-in`}>
      <a href="#home" onClick={() => setActive("")}>
        <img src={logo} width={120} alt="Logo" />
      </a>

      <ul className="flex gap-10 mr-10 text-white border-b-2 border-b-transparent">
        <a
          href="#about"
          className={`${
            active === "about" ? "border-b-2 border-b-orange opacity-100" : "border-b-2 border-transparent"
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}>
          <li>About us</li>
        </a>
        <a
          href="#categories"
          className={`${
            active === "categories" ? "border-b-2 border-b-orange opacity-100" : "border-b-2 border-transparent"
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}>
          <li>Reviews</li>
        </a>
        <a
          href="#contact"
          className={`${
            active === "contact" ? "border-b-2 border-b-orange opacity-100" : "border-b-2 border-transparent"
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}>
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Header;
