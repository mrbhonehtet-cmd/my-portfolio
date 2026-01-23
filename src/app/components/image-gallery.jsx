"use client";

import { useState } from "react";
// use native <img> instead of Next.js Image to avoid Next image optimization issues
// and to allow direct external URLs without configuring remote domains.
// Use a simple close glyph instead of pulling an extra dependency like lucide-react


const images = [
  {
    src: "/assets/Lanyard/my cv gusto iot certi.jpg",
    alt: "Gusto IoT Certificate",
  },
  {
    src: "/assets/Lanyard/my cv certi.jpg",
    alt: "‌တက္ကသိုလ်ဝင်စာမေးပွဲအောင်လက်မှတ်",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
  <section id="image-gallery" tabIndex={-1} aria-label="Certificates" className="mx-auto max-w-4xl py-8">
      <h2 className="text-center text-3xl font-bold text-white">
        My  <span className="gradient-text">Certificates</span>
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-white">
        Click any image to view full size
         <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>

      </p>
      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer overflow-hidden rounded-lg bg-muted"
          >
            <div className="relative w-full h-40 sm:h-48 animate-float overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ display: "block" }}
              />
              <div className="absolute bottom-0 w-full bg-black/60 px-3 py-1 text-center">
  <span className="text-sm font-medium text-white">
    {image.alt}
  </span>
</div>

            </div>
          </div>
        ))}

        {/* Diploma placeholder (image not ready yet) */}
        <div
          key="diploma-pending"
          className="cursor-default overflow-hidden rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-gray-600"
          title="Gusto Diploma - image pending"
        >
          <div className="relative w-full h-40 sm:h-48 animate-float flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-gray-200">Gusto Diploma</div>
              <div className="text-sm text-gray-400 mt-2">Certificate image pending</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
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
              className="max-w-full max-h-[90vh] object-contain mx-auto"
              style={{ display: "block" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white text-2xl leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
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

