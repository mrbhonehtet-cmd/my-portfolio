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
    src: "/assets/Lanyard/shwebank.jpg",
    alt: "‌Shwe Bank Certificate",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="image-gallery" tabIndex={-1} aria-label="Certificates" className="mx-auto max-w-4xl py-8">
      <h2 className="text-center text-3xl font-bold text-white">
        My <span className="gradient-text">Certificates</span>
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-white">
        Swipe to see more
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-1"></div>
      </p>

      {/* Changes made for Slider:
        1. Changed 'grid' to 'flex'
        2. Added 'overflow-x-auto' to allow scrolling
        3. Added 'pb-4' to make room for scrollbar/touch gestures
      */}
      <div className="mt-8 flex w-full gap-6 overflow-x-auto px-2 pb-6 snap-x snap-mandatory scrollbar-hide">
        
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            // CRITICAL: 'flex-none' prevents squishing. 
            // w-[85vw] means it takes 85% of mobile screen (so you see the next one peeking)
            // sm:w-80 sets a fixed size on larger screens
            className="flex-none w-[85vw] sm:w-80 snap-center cursor-pointer overflow-hidden rounded-lg bg-muted border border-white/10"
          >
            <div className="relative w-full h-48 sm:h-56 animate-float overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ display: "block" }}
              />
              <div className="absolute bottom-0 w-full bg-black/60 px-3 py-2 text-center">
                <span className="text-sm font-medium text-white block truncate">
                  {image.alt}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Diploma placeholder */}
        <div
          key="diploma-pending"
          className="flex-none w-[85vw] sm:w-80 snap-center cursor-default overflow-hidden rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-gray-600"
          title="Gusto Diploma - image pending"
        >
          <div className="relative w-full h-48 sm:h-56 animate-float flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-gray-200">Gusto Diploma</div>
              <div className="text-sm text-gray-400 mt-2">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox - No changes here, this stays exactly the same */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              loading="eager"
              className="max-w-full max-h-[90vh] object-contain mx-auto shadow-2xl"
              style={{ display: "block" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 sm:right-4 sm:top-4 rounded-full bg-white/10 p-2 text-white text-2xl leading-none hover:bg-white/20 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Styles to hide the scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
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
