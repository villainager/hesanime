// components/molecules/GenreSelectionPopup.jsx
import { useState, useEffect } from "react";

const GenreSelectionPopup = ({ onClose, onSelectGenre }) => {
  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Romance" },
    { id: 3, name: "Horror" },
    { id: 4, name: "Comedy" },
    { id: 5, name: "Fantasy" },
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Animasi masuk ketika modal pertama kali ditampilkan
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Menunda animasi masuk untuk hasil yang lebih halus
    return () => clearTimeout(timer);
  }, []);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleSubmit = () => {
    onSelectGenre(selectedGenres);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Menunggu animasi keluar selesai
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div
        className={`transition-all duration-500 ease-in-out transform ${
          isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        } bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 max-w-lg w-full shadow-lg`}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Pilih Genre Favorit
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => toggleGenre(genre.name)}
              className={`px-4 py-2 rounded-full transition-all transform ${
                selectedGenres.includes(genre.name)
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-200 bg-opacity-30 text-gray-300"
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-red-600 bg-opacity-50 hover:bg-red-700 hover:bg-opacity-60 text-white rounded transition-all"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 bg-opacity-50 hover:bg-blue-700 hover:bg-opacity-60 text-white rounded transition-all"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreSelectionPopup;
