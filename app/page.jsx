'use client';
import { useState } from 'react';
import Navbar from './components/organisms/Navbar';
import HeroSection from './components/organisms/HeroSection';
import CategoryButtons from './components/molecules/CategoryButtons';
import TrendingCards from './components/organisms/TrendingCards';

export default function Home() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = (visible) => {
    setIsOverlayVisible(visible);
  };

  return (
    <div className="background-gradient bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center relative">
      {/* Overlay with horror effect */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-1000 ${
          isOverlayVisible ? "opacity-80 blur-md" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <Navbar />
      <HeroSection toggleOverlay={toggleOverlay} />
      <CategoryButtons />
      <TrendingCards toggleOverlay={toggleOverlay} />
    </div>
  );
}
