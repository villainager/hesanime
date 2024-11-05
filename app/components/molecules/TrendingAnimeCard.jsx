// components/molecules/TrendingAnimeCard.jsx

const TrendingAnimeCard = ({ imageUrl, title, rating, year, className }) => {
    return (
      <div className={`rounded-lg overflow-hidden shadow-lg bg-opacity-80 glass ${className}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 text-white">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-400">Year: {year}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm font-semibold bg-yellow-500 bg-opacity-75 px-2 py-1 rounded-full">
              Rating: {rating}
            </span>
            <button className="text-blue-400 hover:text-blue-500 text-lg">
              <i className="fas fa-play-circle"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrendingAnimeCard;
  