export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* VanJS Logo and Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-4">vanJS</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/vanjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/linkein_icon.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://discord.gg/vanjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/discord_icon.png" alt="Discord" className="w-8 h-8" />
            </a>
            <a href="https://www.meetup.com/vanjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/meetup_icon.png" alt="Meetup" className="w-8 h-8" />
            </a>
            <a href="https://lu.ma/vanjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/luma_icon.png" alt="Luma" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Join Our Discord */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Join Our Discord</h3>
          <div className="flex items-center gap-2 mb-2">
            <img src="/general/ruben.png" alt="Duck" className="w-8 h-8" />
            <img src="/general/discord_logo.png" alt="Discord" className="h-8" />
          </div>
          <p className="text-gray-300 text-center md:text-left">
            Connect with our community on Discord to get real-time help, share ideas, and discuss projects!
          </p>
          <a 
            href="https://discord.gg/vanjs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center bg-[#5865F2] text-white px-6 py-2 rounded-md hover:bg-[#4752C4] transition-colors"
          >
            Join Discord
          </a>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
          <ul className="flex flex-col gap-2 text-center md:text-left">
            <li>
              <a 
                href="https://github.com/vanjs-org/van" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                The VanJS GitHub Repo
              </a>
            </li>
            <li>
              <a 
                href="https://vanjs.org/call-for-speakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Call For Speakers
              </a>
            </li>
            <li>
              <a 
                href="https://vanjs.org/code-of-conduct" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Code Of Conduct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
