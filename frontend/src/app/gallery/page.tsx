"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/1.jpg",
    title: "Sunset in Bali",
    alt: "Beautiful sunset",
  },
  { id: 2, src: "/gallery/2.jpg", title: "Tokyo Streets", alt: "City streets" },
  {
    id: 3,
    src: "/gallery/3.jpg",
    title: "Paris Morning",
    alt: "Morning in Paris",
  },
  {
    id: 4,
    src: "/gallery/4.jpg",
    title: "Mountain View",
    alt: "Mountain landscape",
  },
  {
    id: 5,
    src: "/gallery/5.jpg",
    title: "Beach Paradise",
    alt: "Beach scenery",
  },
  { id: 6, src: "/gallery/6.jpg", title: "Forest Trail", alt: "Forest path" },
  { id: 7, src: "/gallery/7.jpg", title: "Desert Dunes", alt: "Sand dunes" },
  {
    id: 8,
    src: "/gallery/8.jpg",
    title: "Ocean Views",
    alt: "Ocean landscape",
  },
  {
    id: 9,
    src: "/gallery/9.jpg",
    title: "City Lights",
    alt: "City night lights",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A visual collection of breathtaking moments and stunning landscapes
            from around the world.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
          style={{ aspectRatio: "3/2" }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition-transform"
            >
              ✕
            </button>
            <div
              className="relative w-full max-w-4xl h-96"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/gallery/${selectedImage}.jpg`}
                alt="Selected"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
