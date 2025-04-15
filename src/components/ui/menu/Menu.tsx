import { useState } from 'react';
import { scrollToSection } from '../../../utils/navigation';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-[#feb92f] px-4 py-2 sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="/vanjs-logo.png" alt="vanJS Logo" className="w-16 md:w-20 lg:w-24" />
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 mr-4 ml-4">
          <button onClick={() => handleNavigation('home')} className="text-black text-lg hover:text-gray-700">Home</button>
          <button onClick={() => handleNavigation('about')} className="text-black text-lg hover:text-gray-700">About Us</button>
          <button onClick={() => handleNavigation('organizers')} className="text-black text-lg hover:text-gray-700">Organizers</button>
          <button onClick={() => handleNavigation('sponsors')} className="text-black text-lg hover:text-gray-700">Sponsors</button>
          <button onClick={() => handleNavigation('events')} className="text-black text-lg hover:text-gray-700">Events</button>
          <button onClick={() => handleNavigation('faq')} className="text-black text-lg hover:text-gray-700">FAQ</button>
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-xs"
          >
            Join Our Discord
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col space-y-2 pt-4">
          <button onClick={() => handleNavigation('home')} className="text-black text-sm hover:text-gray-700 px-2 py-2 text-left">Home</button>
          <button onClick={() => handleNavigation('about')} className="text-black text-sm hover:text-gray-700 px-2 py-2 text-left">About Us</button>
          <button onClick={() => handleNavigation('organizers')} className="text-black text-sm hover:text-gray-700 px-2 py-2 text-left">Organizers</button>
          <button onClick={() => handleNavigation('sponsors')} className="text-black text-sm hover:text-gray-700 px-2 py-2 text-left">Sponsors</button>
          <button onClick={() => handleNavigation('events')} className="text-black text-sm hover:text-gray-700 px-2 py-2 text-left">Events</button>
          <button onClick={() => handleNavigation('faq')} className="text-black text-sm hover:text-gray-700 px-2 py-2 text-left">FAQ</button>
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm mx-2 my-2 inline-block w-fit"
          >
            Join Our Discord
          </a>
        </div>
      </div>
    </nav>
  );
};
