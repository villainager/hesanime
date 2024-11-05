import TrendingCard from "../molecules/TrendingCard";

const TrendingCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl sm:text-3xl font-semibold">
          Trending Voice
        </h3>

        <div className="flex items-center space-x-3 sm:space-x-4 glass px-4 py-2 sm:px-6 sm:py-3 rounded-full">
          <button className="icon-glass">
            <i className="fas fa-sliders-h text-slate-200 text-lg sm:text-xl"></i>
          </button>
          <div className="divider border-slate-900 border h-4 sm:h-5"></div>
          <button className="icon-glass">
            <i className="fas fa-filter text-slate-200 text-lg sm:text-xl"></i>
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar md:justify-center">
        <div className="flex space-x-4 justify-between">
          <TrendingCard
            imageUrl="/assets/kyoraku-shunsui.png"
            title="Kyoraku Shunsui"
            rating="7.8"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="/assets/food-wars.png"
            title="Food Wars"
            rating="6.0"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="assets/blue-lock.png"
            title="Blue Lock"
            rating="7.1"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="/assets/demon-slayer.png"
            title="Demon Slayer"
            rating="7.8"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
            imageUrl="/assets/death-notes.png"
            title="Death Notes"
            rating="6.1"
            year="2023"
            className="w-1/2 md:w-1/3 flex-shrink-0"
          />
          <TrendingCard
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

export default TrendingCards;
