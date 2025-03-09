import { useStore } from "./store/zuntand";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Navbar />
      <Introduction />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
}
