"use client";

import { useState } from "react";

const images = [
  {
    src: "/assets/Lanyard/my cv gusto iot certi.jpg",
    alt: "Gusto IoT Certificate",
  },
  {
    src: "/assets/Lanyard/my cv certi.jpg",
    alt: "‌တက္ကသိုလ်ဝင်စာမေးပွဲအောင်လက်မှတ်",
  },
  {
    src: "/assets/Lanyard/shwebank1.jpg",
    alt: "‌Shwe Bank Certificate",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="image-gallery" className="mx-auto max-w-6xl py-8">
      <h2 className="text-center text-3xl font-bold text-white">
        My <span className="gradient-text">Certificates</span>
      </h2>
      
      <div className="mt-2 text-center text-muted-foreground text-white">
        <span className="md:hidden">Swipe to see more</span>
        <span className="hidden md:inline">Click to expand</span>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-2"></div>
      </div>

      {/* FIXED: All classes are now on one solid line to prevent Vercel build errors */}
      <div className="mt-8 flex gap-6 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible md:snap-none lg:grid-cols-3">
        
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="flex-none w-[85vw] snap-center cursor-pointer overflow-hidden rounded-lg bg-muted border border-white/10 md:w-auto md:snap-align-none"
          >
            <div className="relative w-full h-48 sm:h-56 animate-float overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-black/60 px-3 py-2 text-center">
                <span className="text-sm font-medium text-white block truncate">
                  {image.alt}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div
          className="flex-none w-[85vw] snap-center cursor-default overflow-hidden rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-gray-600 md:w-auto md:snap-align-none h-48 sm:h-56"
        >
          <div className="text-center p-4">
            <div className="text-lg font-semibold text-gray-200">Gusto Diploma</div>
            <div className="text-sm text-gray-400 mt-2">Coming Soon</div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-full object-contain shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
