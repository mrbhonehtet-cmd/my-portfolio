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
    <section id="image-gallery" className="mx-auto max-w-4xl py-8">
      <h2 className="text-center text-3xl font-bold text-white">
        My <span className="gradient-text">Certificates</span>
      </h2>
      
      {/* Fixed: div outside of p to prevent hydration errors */}
      <div className="mt-2 text-center text-muted-foreground text-white">
        <span className="md:hidden">Swipe to see more</span>
        <span className="hidden md:inline">Click any image to view full size</span>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-2"></div>
      </div>

      {/* MOBILE: flex slider 
          DESKTOP: md:grid (2 columns as per your original layout)
      */}
      <div className="mt-8 flex gap-6 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible md:snap-none">
        
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="flex-none w-[85vw] snap-center cursor-pointer overflow-hidden rounded-lg bg-muted md:w-auto md:snap-align-none"
          >
            <div className="relative w-full h-40 sm:h-48 animate-float overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-black/60 px-3 py-1 text-center">
                <span className="text-sm font-medium text-white">{image.alt}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Diploma placeholder */}
        <div
          className="flex-none w-[85vw] snap-center cursor-default overflow-hidden rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-gray-600 md:w-auto md:snap-align-none h-40 sm:h-48"
        >
          <div className="text-center p-4">
            <div className="text-lg font-semibold text-gray-200">Gusto Diploma</div>
            <div className="text-sm text-gray-400 mt-2">Certificate image pending</div>
          </div>
        </div>
      </div>

      {/* Lightbox - Fixed Positioning and Visibility */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex items-center justify-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain mx-auto rounded-sm shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 md:-right-12 md:top-0 rounded-full bg-white/10 p-3 text-white text-3xl leading-none hover:bg-white/20 transition-all"
            >
              ×
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
