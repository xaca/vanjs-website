import { useState } from 'react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFC107] px-4 py-2">
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
          <a href="#" className="text-black text-lg hover:text-gray-700">Home</a>
          <a href="#" className="text-black text-lg hover:text-gray-700">About Us</a>
          <a href="#" className="text-black text-lg hover:text-gray-700">Organizers</a>
          <a href="#" className="text-black text-lg hover:text-gray-700">Sponsors</a>
          <a href="#" className="text-black text-lg hover:text-gray-700">Events</a>
          <a href="#" className="text-black text-lg hover:text-gray-700">FAQ</a>
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
          <a href="#" className="text-black text-sm hover:text-gray-700 px-2 py-2">Home</a>
          <a href="#" className="text-black text-sm hover:text-gray-700 px-2 py-2">About Us</a>
          <a href="#" className="text-black text-sm hover:text-gray-700 px-2 py-2">Organizers</a>
          <a href="#" className="text-black text-sm hover:text-gray-700 px-2 py-2">Sponsors</a>
          <a href="#" className="text-black text-sm hover:text-gray-700 px-2 py-2">Events</a>
          <a href="#" className="text-black text-sm hover:text-gray-700 px-2 py-2">FAQ</a>
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
