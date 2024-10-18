import Button from "../atoms/Button";

// Fungsi untuk mengembalikan ikon yang sesuai berdasarkan kategori
const getIcon = (category) => {
  switch (category) {
    case "Trending":
      return "fa-fire text-orange-400";
    case "Action":
      return "fa-bolt text-red-400";
    case "Romance":
      return "fa-heart text-pink-400";
    case "Animation":
      return "fa-film text-yellow-400";
    case "Horror":
      return "fa-ghost text-purple-400";
    case "Special":
      return "fa-star text-blue-400";
    case "Drakor":
      return "fa-dragon text-green-400";
    default:
      return "fa-question";
  }
};

// Fungsi untuk mengembalikan warna hover yang lebih cerah sesuai dengan kategori
const getHoverColor = (category) => {
  switch (category) {
    case "Trending":
      return "hover:bg-orange-600";
    case "Action":
      return "hover:bg-red-600";
    case "Romance":
      return "hover:bg-pink-600";
    case "Animation":
      return "hover:bg-yellow-600";
    case "Horror":
      return "hover:bg-purple-600";
    case "Special":
      return "hover:bg-blue-600";
    case "Drakor":
      return "hover:bg-green-600";
    default:
      return "hover:bg-gray-600";
  }
};

const CategoryButtons = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex gap-3 md:gap-5 justify-between overflow-x-auto no-scrollbar p-4 px-0 mx-5">
        {[
          "Trending",
          "Action",
          "Romance",
          "Animation",
          "Horror",
          "Special",
          "Drakor",
        ].map((category, index) => (
          <Button
            key={index}
            className={`group flex-1 flex items-center justify-center space-x-2 rounded-full transition duration-300 ease-in-out transform ${getHoverColor(
              category
            )} px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base`} // Padding dan ukuran teks berbeda di mobile
          >
            <i
              className={`fas ${getIcon(
                category
              )} text-lg sm:text-xl transition-transform duration-300 ease-in-out group-hover:animate-jelly`} // Ukuran ikon lebih kecil di mobile
            ></i>
            <span>{category}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
