'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import DevDescription from "./components/DevDescription";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-[#11071F] w-full">
      <Navbar />      <div className="container mx-auto">
        <DevDescription />
        <Skills />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </main>

  );
}