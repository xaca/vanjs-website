export default function CallForSpeakers() {
  return (
    <section className="py-16 px-4 bg-[#feb92f] rounded-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do you want to share your experience with our community?
        </h2>
        <p className="text-lg text-gray-800 mb-8">
          We would love to have you sharing your knowledge as one of our speakers!
        </p>
        
        <a
          href="https://github.com/VanJS/meetup/blob/master/SPEAKING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-black text-white font-semibold cursor-pointer rounded-lg hover:border-[#feb92f] hover:text-[#feb92f] hover:scale-105 hover:bg-white transition-colors"
        >
          Send Your Application Here
        </a>
      </div>
    </section>
  );
}
