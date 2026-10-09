import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Cta from "../Components/Cta";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import VideAbout from "../Components/VideAbout";

const LandingPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");

    if (!section) return;

    const timer = setTimeout(() => {
      const targetSection = document.getElementById(section);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <VideAbout />
      <Cta />
      <Footer />
    </div>
  );
};

export default LandingPage;