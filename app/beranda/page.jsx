// pages/beranda.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import CategoryButtons from "../components/molecules/CategoryButtons";
import TrendingCards from "../components/organisms/TrendingCards";
import GenreSelectionPopup from "../components/molecules/GenreSelectionPopup";

export default function Beranda() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showGenrePopup, setShowGenrePopup] = useState(true);
  const [activeContent, setActiveContent] = useState("voice");

  const trendingRef = useRef(null);
  const newlyAddedRef = useRef(null);

  const toggleOverlay = (visible) => {
    setIsOverlayVisible(visible);
  };

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGenreSelection = (selectedGenres) => {
    console.log("Selected Genres:", selectedGenres);
    setShowGenrePopup(false);
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Conditional gradient class based on activeContent
  const gradientClass = () => {
    switch (activeContent) {
      case "voice":
        return "bg-gradient-voice";
      case "anime":
        return "bg-gradient-anime";
      case "manga":
        return "bg-gradient-manga";
      default:
        return "bg-gray-900";
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative ${gradientClass()}`}>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="fixed w-full top-0 z-40">
            <Navbar onContentChange={handleContentChange} />
          </div>

          <div className="pt-24 w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen ">
            <div
              className={`fixed inset-0 bg-black z-30 transition-all duration-1000 ${
                isOverlayVisible
                  ? "opacity-80 blur-md"
                  : "opacity-0 pointer-events-none"
              }`}
            ></div>

            {activeContent === "voice" && (
              <>
                <HeroSection toggleOverlay={toggleOverlay} />
                <CategoryButtons />
                <TrendingCards toggleOverlay={toggleOverlay} />
              </>
            )}
            {activeContent === "anime" && (
              <div className="w-full p-6 space-y-10">
                {/* Main Banner */}
                <div
                  className="relative rounded-lg overflow-hidden bg-cover bg-center h-80"
                  style={{
                    backgroundImage: "url('/assets/ryomen-sukuna.png')",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="absolute bottom-8 left-8 text-white space-y-3">
                    <h2 className="text-3xl font-bold">Attack on Titan</h2>
                    <p>Season 3 • TV • Action • 24m</p>
                    <p className="text-gray-300 text-sm">
                      When man-eating Titans first appeared 100 years ago,
                      humans found safety behind massive walls that stopped the
                      giants...
                    </p>
                    <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all">
                      <i className="fas fa-play mr-2"></i>Watch Now
                    </button>
                  </div>
                </div>

                {/* Trending Now Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-white">Trending Now</h3>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => scrollLeft(trendingRef)}
                        className="p-2 bg-black bg-opacity-50 rounded-full"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        onClick={() => scrollRight(trendingRef)}
                        className="p-2 bg-black bg-opacity-50 rounded-full"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      ref={trendingRef}
                      className="flex gap-4 overflow-x-auto no-scrollbar"
                    >
                      {[
                        {
                          title: "One Piece",
                          image: "/assets/kento-nanami.png",
                          rating: "8.9",
                          type: "TV",
                        },
                        {
                          title: "Hunter x Hunter",
                          image: "/assets/hunter-x-hunter.jpg",
                          rating: "8.7",
                          type: "TV",
                        },
                        {
                          title: "My Hero Academia",
                          image: "/assets/my-hero-academia.jpg",
                          rating: "7.8",
                          type: "TV",
                        },
                        {
                          title: "Remake Our Life",
                          image: "/assets/remake-our-life.jpg",
                          rating: "7.3",
                          type: "TV",
                        },
                        {
                          title: "Demon Slayer",
                          image: "/assets/demon-slayer.jpg",
                          rating: "9.1",
                          type: "TV",
                        },
                        {
                          title: "Jujutsu Kaisen",
                          image: "/assets/jujutsu-kaisen.jpg",
                          rating: "8.6",
                          type: "TV",
                        },
                        {
                          title: "Attack on Titan: The Final Season",
                          image: "/assets/attack-on-titan-final.png",
                          rating: "9.3",
                          type: "TV",
                        },
                      ].map((anime, index) => (
                        <div
                          key={index}
                          className="w-48 h-72 rounded-lg overflow-hidden glass p-4 text-center flex-shrink-0"
                        >
                          <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-full h-48 object-cover rounded-md"
                          />
                          <div className="mt-3 text-white">
                            <h4 className="font-semibold">{anime.title}</h4>
                            <p className="text-sm text-gray-300">
                              {anime.type} • Rating: {anime.rating}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Newly Added Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-white">Newly Added</h3>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => scrollLeft(newlyAddedRef)}
                        className="p-2 bg-black bg-opacity-50 rounded-full"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        onClick={() => scrollRight(newlyAddedRef)}
                        className="p-2 bg-black bg-opacity-50 rounded-full"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      ref={newlyAddedRef}
                      className="flex gap-4 overflow-x-auto no-scrollbar"
                    >
                      {[
                        {
                          title: "One Punch Man",
                          image: "/assets/food-wars.png",
                          rating: "8.4",
                          type: "TV",
                        },
                        {
                          title: "Tokyo Revengers",
                          image: "/assets/blue-lock.png",
                          rating: "8.0",
                          type: "TV",
                        },
                        {
                          title: "The Detective Is Already Dead",
                          image: "/assets/detective-dead.jpg",
                          rating: "6.5",
                          type: "TV",
                        },
                        {
                          title: "Death Note",
                          image: "/assets/death-note.jpg",
                          rating: "9.0",
                          type: "TV",
                        },
                        {
                          title: "Tokyo Revengers",
                          image: "/assets/blue-lock.png",
                          rating: "8.0",
                          type: "TV",
                        },
                        {
                          title: "The Detective Is Already Dead",
                          image: "/assets/detective-dead.jpg",
                          rating: "6.5",
                          type: "TV",
                        },
                        {
                          title: "Death Note",
                          image: "/assets/death-note.jpg",
                          rating: "9.0",
                          type: "TV",
                        },
                      ].map((anime, index) => (
                        <div
                          key={index}
                          className="w-48 h-72 rounded-lg overflow-hidden glass p-4 text-center flex-shrink-0"
                        >
                          <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-full h-48 object-cover rounded-md"
                          />
                          <div className="mt-3 text-white">
                            <h4 className="font-semibold">{anime.title}</h4>
                            <p className="text-sm text-gray-300">
                              {anime.type} • Rating: {anime.rating}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Continue Watching Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Continue Watching
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                      <div
                        key={index}
                        className="relative w-full h-48 bg-cover bg-center rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: "url('/assets/your-image-url.jpg')",
                        }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
                          <div className="text-white text-xs">
                            <span>Season 3, Episode 23</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              Attack On Titan
                            </h4>
                            <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                              <span className="text-red-600">
                                14:23 / 25:34
                              </span>
                              <button className="bg-red-600 rounded-full p-2 text-white">
                                <i className="fas fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                      Show All
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeContent === "manga" && (
              <div className="w-full p-6 space-y-10">
                {/* Hero Section for Manga */}
                <div
                  className="relative rounded-lg overflow-hidden bg-cover bg-center h-80 flex items-center"
                  style={{
                    backgroundImage: "url('/assets/AOT.png')", // Placeholder gambar hero
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative z-10 px-6">
                    <p className="text-white text-sm font-semibold uppercase mb-2">
                      Petualangan; Fantasi Gelap; Seni Bela Diri
                    </p>
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                      Demon Slayer: Kimetsu no Yaiba
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Yang berusaha menjadi pembasmi iblis setelah keluarganya
                      dibunuh dan adiknya, Nezuko, berubah menjadi iblis.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition-all mr-4">
                      Baca Sekarang
                    </button>
                    <span className="text-white font-semibold">Ch. 205</span>
                  </div>
                </div>

                {/* New Released Comic Section */}
                <h3 className="text-3xl font-extrabold tracking-wide mb-4 italic text-center">
                  KOMIK TERBARU
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    {
                      title: "One Piece",
                      image: "/assets/AOT.png", // Placeholder gambar komik
                      chapter: "Bab 1079: Istana Kaisar",
                      rating: "4.3 / 5.0",
                    },
                    {
                      title: "Black Clover",
                      image: "/assets/AOT.png",
                      chapter: "Bab 356: Neverland",
                      rating: "4.3 / 5.0",
                    },
                    {
                      title: "Jujutsu Kaisen",
                      image: "/assets/AOT.png",
                      chapter: "Bab 218: The Bath 3",
                      rating: "4.3 / 5.0",
                    },
                    {
                      title: "Chainsawman",
                      image: "/assets/AOT.png",
                      chapter: "Bab 125: Pencuri Apel",
                      rating: "4.3 / 5.0",
                    },
                  ].map((manga, index) => (
                    <div
                      key={index}
                      className="text-center bg-gray-800 p-4 rounded-lg"
                    >
                      <img
                        src={manga.image}
                        alt={manga.title}
                        className="w-full h-60 object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-lg font-bold text-white uppercase">
                        {manga.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{manga.chapter}</p>
                      <div className="flex items-center justify-center text-yellow-500 text-sm mt-1">
                        ⭐ {manga.rating}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Explore By Interest Section */}
                <h3 className="text-3xl font-extrabold tracking-wide mb-4 italic text-center">
                  JELAJAH BERDASARKAN MINAT
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    {
                      title: "Drama Romantis",
                      description: "Nikmati drama dan rasakan sensasinya",
                      background: "/assets/AOT.png", // Placeholder background
                    },
                    {
                      title: "Aksi - Petualangan",
                      description: "Rasakan ketegangan selama pertarungan",
                      background: "/assets/AOT.png",
                    },
                    {
                      title: "Seni Bela Diri",
                      description: "Temukan keajaiban dalam petualanganmu",
                      background: "/assets/AOT.png",
                    },
                    {
                      title: "Olahraga",
                      description:
                        "Fokus pada cerita yang melibatkan olahraga dan kompetisi",
                      background: "/assets/AOT.png",
                    },
                    {
                      title: "Komedi",
                      description: "Hiburkan, Bayangkan, dan Berinspirasi",
                      background: "/assets/AOT.png",
                    },
                    {
                      title: "Horor",
                      description: "Rasakan ketakutan dan kengerian Manga",
                      background: "/assets/AOT.png",
                    },
                    {
                      title: "Keluarga",
                      description: "Rasakan nilai-nilai keluarga dalam Manga",
                      background: "/assets/AOT.png",
                    },
                    {
                      title: "Lihat Semua Genre Manga",
                      description: "",
                      background: "/assets/AOT.png",
                    },
                  ].map((genre, index) => (
                    <div
                      key={index}
                      className="relative bg-cover bg-center h-48 rounded-lg overflow-hidden"
                      style={{ backgroundImage: `url('${genre.background}')` }}
                    >
                      <div className="absolute inset-0 bg-red-800 bg-opacity-70 flex flex-col items-center justify-center p-4">
                        <h4 className="text-lg font-bold text-white uppercase text-center">
                          {genre.title}
                        </h4>
                        {genre.description && (
                          <p className="text-gray-200 text-sm text-center mt-1">
                            {genre.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Sections */}
                <h3 className="text-3xl font-extrabold tracking-wide mb-4 italic text-center">
                  WEEKLY SHONEN JUMP
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <img
                        src="/assets/AOT.png" // Placeholder gambar untuk komik mingguan
                        alt="Weekly Shonen Jump"
                        className="w-full h-60 object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-lg font-bold text-white uppercase">
                        Komik #{index + 1}
                      </h4>
                      <p className="text-gray-400 text-sm">Deskripsi Singkat</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-3xl font-extrabold tracking-wide mb-4 italic text-center">
                  JUMP PLUS
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <img
                        src="/assets/AOT.png" // Placeholder gambar untuk Jump Plus
                        alt="Jump Plus"
                        className="w-full h-60 object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-lg font-bold text-white uppercase">
                        Jump Plus #{index + 1}
                      </h4>
                      <p className="text-gray-400 text-sm">Deskripsi Singkat</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {showGenrePopup && (
            <GenreSelectionPopup
              onGenreSelected={handleGenreSelection}
              onClose={() => setShowGenrePopup(false)}
            />
          )}
        </>
      )}
    </div>
  );
}
