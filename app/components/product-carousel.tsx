"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/prodotto1.jpeg", alt: "Prodotto 1 Rosto's" },
  { src: "/img/prodotto2.jpeg", alt: "Prodotto 2 Rosto's" },
  { src: "/img/prodotto3.jpeg", alt: "Prodotto 3 Rosto's" },
  { src: "/img/prodotto4.jpeg", alt: "Prodotto 4 Rosto's" },
  { src: "/img/prodotto5.jpeg", alt: "Prodotto 5 Rosto's" },
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-(--brown) bg-(--brown)/15 p-3 sm:p-4">
      <div className="relative h-56 overflow-hidden rounded-2xl sm:h-72 md:h-80 lg:h-96">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className="relative h-full w-full shrink-0">
              <Image src={slide.src} alt={slide.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px" />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Immagine precedente"
          className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-(--sand)/40 bg-(--black)/60 text-(--sand) transition hover:bg-(--black)/80"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Immagine successiva"
          className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-(--sand)/40 bg-(--black)/60 text-(--sand) transition hover:bg-(--black)/80"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Vai alla slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-6 bg-white" : "w-2.5 bg-(--sand)/45 hover:bg-(--sand)/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
