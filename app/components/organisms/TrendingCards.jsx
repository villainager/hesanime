import TrendingCard from "../molecules/TrendingCard";

const TrendingCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl sm:text-3xl font-semibold">
          Trending Voice
        </h3>{" "}
        {/* Ukuran teks lebih kecil di mobile */}
        <div className="flex items-center space-x-3 sm:space-x-4 glass px-4 py-2 sm:px-6 sm:py-3 rounded-full">
          {" "}
          {/* Padding lebih kecil di mobile */}
          <button className="icon-glass">
            <i className="fas fa-sliders-h text-slate-200 text-lg sm:text-xl"></i>{" "}
            {/* Ikon lebih kecil di mobile */}
          </button>
          <div className="divider border-slate-900 border h-4 sm:h-5"></div>{" "}
          {/* Divider lebih kecil di mobile */}
          <button className="icon-glass">
            <i className="fas fa-filter text-slate-200 text-lg sm:text-xl"></i>{" "}
            {/* Ikon lebih kecil di mobile */}
          </button>
        </div>
      </div>

      {/* Kontainer dengan scroll horizontal */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar md:justify-center">
        <div className="flex space-x-4 justify-between">
          <TrendingCard
            imageUrl="https://i.pinimg.com/736x/a7/57/66/a757664e6a2cf75981f57303bb182324.jpg"
            title="Kyoraku Shunsui"
            rating="7.8"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="https://i.pinimg.com/originals/9b/b6/0b/9bb60b6be07a8713728cead2287937d8.jpg"
            title="Food Wars"
            rating="6.0"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="https://i.pinimg.com/736x/f7/e6/48/f7e648c179bbf7df8e0f6c7335ad2d6b.jpg"
            title="Blue Lock"
            rating="7.1"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="https://cdn.oneesports.gg/cdn-data/2023/04/Anime_DemonSlayer_Muzan_3-1024x576.jpg"
            title="Demon Slayer"
            rating="7.8"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="https://i0.wp.com/www.bgeekyblog.com/wp-content/uploads/2016/06/l_fancel_from_death_note_by_escaf.jpg"
            title="Death Notes"
            rating="6.1"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="https://i.pinimg.com/originals/1a/5b/3e/1a5b3e761a2ad1079df22e1b39ca972a.jpg"
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

export default TrendingCards;
