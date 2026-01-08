"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const splineRef = useRef(null);

  useEffect(() => {
    const el = splineRef.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("visible"), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero-pattern pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="gradient-text"><br />Saw Bhone Htet</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Creative <span className="gradient-text">Developer</span> & {" "}
              <span className="gradient-text">Designer</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              I craft digital experiences that are beautiful, functional, and user-friendly. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition duration-300">Contact Me</a>
              <a href="#projects" className="px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition duration-300">View Work</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-20 blur-3xl" />
              <div ref={splineRef} className="relative floating spline-wrapper">
                <spline-viewer url="https://prod.spline.design/4VuYuxbQasoOeZOh/scene.splinecode"></spline-viewer>
                <div className="hover-text">Try to Move The 3D Model? <i className="fa-solid fa-hand" style={{ color: "#ffffff" }}></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
