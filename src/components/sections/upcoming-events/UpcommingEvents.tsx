interface Event {
  id: number;
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
}

const events: Event[] = [
  {
    id: 1,
    month: 'APR',
    day: '16',
    title: 'VanJS Easter Talks',
    time: '5:30 - 8:30 PM',
    location: 'Northeastern University'
  },
  {
    id: 2,
    month: 'MAY',
    day: '15',
    title: 'Super VanJS',
    time: '5:30 - 8:30 PM',
    location: 'BCIT Downtown Campus'
  }
];

export default function UpcommingEvents() {
  return (
    <section id="events" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-gray-600">Check out our upcoming VanJS events in Vancouver</p>
      </div>
      
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="border-t border-gray-200 py-6 grid grid-cols-12 gap-4 items-center">
            {/* Date Column */}
            <div className="col-span-2 sm:col-span-1 text-center">
              <div className="text-gray-500 font-medium">{event.month}</div>
              <div className="text-4xl font-bold">{event.day}</div>
            </div>
            
            {/* Content Column */}
            <div className="col-span-10 sm:col-span-8">
              <h3 className="text-xl font-semibold mb-2 text-left">{event.title}</h3>
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>

            {/* Button Column */}
            <div className="col-span-12 sm:col-span-3 flex items-center justify-end">
              <button className="w-full sm:w-auto px-8 py-3 bg-[#feb92f] border-1 border-black text-black font-semibold rounded-lg hover:text-white hover:border-white transition-colors">
                Save Your Spot Here!
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
