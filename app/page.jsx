import Navbar from './components/organisms/Navbar';
import HeroSection from './components/organisms/HeroSection';
import CategoryButtons from './components/molecules/CategoryButtons';
import TrendingCards from './components/organisms/TrendingCards';

export default function Home() {
  return (
    <div className="background-gradient bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <CategoryButtons />
      <TrendingCards />
    </div>
  );
}
