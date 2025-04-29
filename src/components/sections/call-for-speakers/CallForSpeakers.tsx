export default function CallForSpeakers() {
  return (
    <section className="py-16 px-4 bg-[#feb92f] text-[#1C1B1B] rounded-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[30px] font-bold mb-4">
          Do you want to share your experience with our community?
        </h2>
        <p className="text-[17px] mb-8">
          We would love to have you sharing your knowledge as one of our speakers!
        </p>
        
        <a
          href="https://github.com/VanJS/meetup/blob/master/SPEAKING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#feb92f] border-1 border-black text-black px-6 py-3 rounded-md text-lg font-medium
                   transition-colors duration-200
                   transform hover:text-white hover:bg-black cursor-pointer"
        >
          Send Your Application Here
        </a>
      </div>
    </section>
  );
}
