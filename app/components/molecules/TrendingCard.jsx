import Image from "../atoms/Image";


const TrendingCard = ({ imageUrl, title, rating, year }) => {
  return (
    <div className="glass rounded-3xl w-48 relative overflow-hidden">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="gradient-overlay-bottom absolute inset-0"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-white text-lg mb-2">{title}</h4>
        <div className="flex items-center text-sm text-gray-400 space-x-2">
          <i className="fas fa-star text-orange-400"></i>
          <span>{rating}</span>
          <span>|</span>
          <span>{year}</span>
        </div>
      </div>

      {/* Tombol Play di tengah card, dibungkus dengan div untuk stabilitas */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[10.8rem] z-10">
        <button className="group flex items-center space-x-2 px-6 py-2 w-auto hover:animate-jelly transition rounded-xl self-start dark-glass border-b border-slate-500">
          <i className="fas fa-play text-sm md:text-base lg:text-lg transition-transform duration-300 ease-in-out group-hover:animate-jelly"></i>
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
