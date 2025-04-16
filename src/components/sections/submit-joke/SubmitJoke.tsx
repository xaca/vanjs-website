export default function SubmitJoke() {
  return (
    <div className="relative min-h-[300px] flex flex-col items-center justify-center bg-black text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
          Make Us LOL!
          <img 
            src="/general/quaky.png" 
            alt="Laughing emoji" 
            className="w-10 h-10 md:w-12 md:h-12 inline-block rotate-35"
          />
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          We love a good laugh! Submit your funniest joke and it might be featured at our upcoming event.
        </p>
        <button 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScJgcHF72TR0UTX58_ofDAq646Jig19kG-3d7GwfBDkwYz6kw/viewform', '_blank')}
          className="bg-[#FDB347] cursor-pointer hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Submit Your Joke
        </button>
      </div>
    </div>
  );
}
