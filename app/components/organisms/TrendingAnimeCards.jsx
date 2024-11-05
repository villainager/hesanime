// components/organisms/TrendingAnimeCards.jsx
import TrendingAnimeCard from "../molecules/TrendingAnimeCard";

const TrendingAnimeCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl sm:text-3xl font-semibold">Trending Now</h3>

        {/* Bagian kanan dengan tombol previous dan next */}
        <div className="flex items-center space-x-3">
          <button className="text-white text-lg">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="text-white text-lg">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar md:justify-center">
        <div className="flex space-x-4 justify-between">
          <TrendingAnimeCard
            imageUrl="/assets/kyoraku-shunsui.png"
            title="Kyoraku Shunsui"
            rating="7.8"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingAnimeCard
            imageUrl="/assets/food-wars.png"
            title="Food Wars"
            rating="6.0"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingAnimeCard
            imageUrl="assets/blue-lock.png"
            title="Blue Lock"
            rating="7.1"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingAnimeCard
            imageUrl="/assets/demon-slayer.png"
            title="Demon Slayer"
            rating="7.8"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingAnimeCard
            imageUrl="/assets/death-notes.png"
            title="Death Notes"
            rating="6.1"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingAnimeCard
            imageUrl="/assets/tensei-shittara.png"
            title="Tensei Shittara"
            rating="6.5"
            year="2022"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingAnimeCards;
