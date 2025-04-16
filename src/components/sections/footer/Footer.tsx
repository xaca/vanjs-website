export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* VanJS Logo and Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-4">vanJS</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/vancouverjs/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/linkedin_icon.png" alt="LinkedIn" className="w-8" />
            </a>
            <a href="https://discord.gg/TBWB9tMmmC" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/discord_icon.png" alt="Discord" className="w-8" />
            </a>
            <a href="https://www.meetup.com/vancouver-javascript-developers/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/meetup_icon.png" alt="Meetup" className="w-8" />
            </a>
            <a href="https://lu.ma/vanjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/general/luma_icon.png" alt="Luma" className="w-8" />
            </a>
          </div>
        </div>

        {/* Join Our Discord */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Join Our Discord</h3>
          
          <p className="text-gray-300 text-center md:text-left">
            Connect with our community on Discord to get real-time help, share ideas, and discuss projects!
          </p>
          
          <div className="flex items-center gap-2 mb-2">
            <img src="/general/ruben.png" alt="Duck" className="w-8 h-8" />
            <a 
            href="https://discord.gg/TBWB9tMmmC" 
            target="_blank" 
            rel="noopener noreferrer">
              <img src="/general/discord_logo.png" alt="Discord" className="h-16" />
            </a>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
          <ul className="flex flex-col gap-2 text-center md:text-left">
            <li>
              <a 
                href="https://github.com/VanJS/meetup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                The VanJS GitHub Repo
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/VanJS/meetup/blob/master/SPEAKING.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Call For Speakers
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/VanJS/meetup/blob/master/CONDUCT.md" 
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
