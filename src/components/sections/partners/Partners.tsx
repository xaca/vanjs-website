import atono_icon from "/general/atono_icon.jpg";
import trust_flight_icon from "/general/trust_flight_icon.jpg";

export default function Partners() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Partners & Sponsors</h2>
        <p className="text-gray-600 mb-12">
          We are incredibly grateful to our partners and sponsors for helping us to grow and innovate!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 justify-items-center items-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#4285f4] rounded-lg flex items-center justify-center">
            <a
              href="https://www.atono.io/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={atono_icon}
                alt="Atono"
                className="object-contain"
              /></a>
            </div>
            <p className="mt-2 font-medium">Atono</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <a
              href="https://www.trustflight.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={trust_flight_icon}
                alt="Trust Flight"
                className="object-contain"
              />
              </a>
            </div>
            <p className="mt-2 font-medium">TrustFlight</p>
          </div>
        </div>

        <a
          href="https://github.com/VanJS/meetup/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#feb92f] border-1 border-black text-black font-semibold rounded-lg hover:border-[#feb92f] hover:text-[#feb92f] hover:scale-105 hover:bg-white transition-colors"
        >
          Become An Sponsor
        </a>
      </div>
    </section>
  );
}
