import Button from "../atoms/Button";
import Image from "../atoms/Image";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="relative glass card-shadow rounded-[32px] overflow-hidden w-full h-full">
      <Image
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="gradient-overlay absolute inset-0"></div>
      <div className="relative px-8 py-6 md:p-6 lg:p-8 text-white z-10 flex flex-col justify-between h-full">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 w-5/6">
          {title}
        </h2>

        <div className="flex flex-col space-y-2">
          <p className="text-sm md:text-lg lg:text-xl mb-2 md:mb-4 line-clamp-4 md:line-clamp-3 lg:line-clamp-6">
            {description}
          </p>

          <Button className="group flex items-center space-x-2 px-4 py-2 sm:w-auto md:w-auto md:px-6 md:py-3 bg-blue-600 hover:animate-tiltLeft transition rounded-full self-start">
            <i className="fas fa-play text-md md:text-base lg:text-lg transition-transform duration-300 ease-in-out group-hover:animate-rollOutIn"></i>
            <span className="text-md md:text-base lg:text-lg">Play</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
