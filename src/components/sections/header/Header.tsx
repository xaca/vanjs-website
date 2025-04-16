import { scrollToSection } from '../../../utils/navigation';

export default function Header() {
  return (
    <header className="bg-[#feb92f] h-[60vh] flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          We foster the JS community<br className="hidden sm:block" />
          in Vancouver
        </h1>
        <button 
          onClick={() => scrollToSection('events')}
          className="bg-[#feb92f] border-1 border-black text-black px-6 py-3 rounded-md text-lg font-medium
                   transition-colors duration-200
                   transform hover:bg-white hover:border-[#feb92f] hover:text-[#feb92f] hover:scale-105 cursor-pointer active:scale-100"
        >
          Check Out Our Upcoming Events
        </button>
      </div>
    </header>
  );
};
