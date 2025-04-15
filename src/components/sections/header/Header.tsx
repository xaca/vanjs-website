import styles from './Header.css';

export default function Header() {
  return (
    <header className="bg-[#FDB813] min-h-[60vh] flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          We foster the JS community<br className="hidden sm:block" />
          in Vancouver
        </h1>
        <button 
          onClick={() => window.location.href='/events'}
          className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium
                   hover:bg-gray-800 transition-colors duration-200
                   transform hover:scale-105 active:scale-100"
        >
          Check Out Our Upcoming Events
        </button>
      </div>
    </header>
  );
};
