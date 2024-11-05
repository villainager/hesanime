'use client';
import { useState } from "react";
import Card from "../molecules/Card";

const HeroSection = ({ toggleOverlay }) => {
  const slides = [
    {
      imageUrl: "/assets/ryomen-sukuna.png",
      title: "Ryomen Sukuna",
      description: "Dalam dunia Jujutsu, Yuji Itadori terjebak dalam pertempuran...",
      soundUrl: "https://www.myinstants.com/media/sounds/sukunas-ryoiki-tenkai.mp3"
    },
    {
      imageUrl: "/assets/kento-nanami.png",
      title: "Kento Nanami",
      description: "Nanami initially left Jujutsu High after graduating...",
      soundUrl: "https://www.myinstants.com/media/sounds/ato-wa-tanomimasu.mp3"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="p-4 md:px-4 md:py-8 max-w-7xl mx-auto relative">
      {/* Carousel untuk layar kecil */}
      <div className="relative flex md:hidden overflow-hidden h-64 w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card
                imageUrl={slide.imageUrl}
                title={slide.title}
                description={slide.description}
                soundUrl={slide.soundUrl} // Passing soundUrl to Card component
                toggleOverlay={toggleOverlay}
              />
            </div>
          ))}
        </div>

        {/* Tombol prev dan next */}
        <button
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition ${
            currentSlide === slides.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        {/* Indikator halaman */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Grid untuk layar besar */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {slides.map((slide, index) => (
          <div key={index} className="max-w-full">
            <Card
              imageUrl={slide.imageUrl}
              title={slide.title}
              description={slide.description}
              soundUrl={slide.soundUrl} // Passing soundUrl to Card component
              toggleOverlay={toggleOverlay}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
