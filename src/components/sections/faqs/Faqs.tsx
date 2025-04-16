import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Who can attend the meetup?",
    answer: "Our meetup welcomes everyone interested in the Vancouver JavaScript community! Whether you are a complete beginner, an experienced developer, or simply curious about JavaScript, we invite you to join us. We welcome humans from all backgrounds, genders, ages and experiences—come be part of our community!"
  },
  {
    question: "When and where does the meetup take place?",
    answer: "Our meetups are typically held monthly at various tech-friendly venues across Vancouver. The specific date, time, and location for each meetup are announced on our website and social media channels at least two weeks in advance."
  },
  {
    question: "You have sponsors but charge for the ticket?",
    answer: "While we do have amazing sponsors who help us with venues and refreshments, we charge a nominal fee to ensure committed attendance and help cover additional costs like equipment rentals and event materials. We reinvest all proceeds back into the community."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className={`mb-4 last:mb-0 ${isOpen ? 'bg-amber-100' : 'bg-white'} rounded-lg overflow-hidden transition-colors duration-200`}>
      <button
        className={`w-full py-4 px-6 text-left flex justify-between items-center transition-colors duration-200 ${
          isOpen ? 'bg-amber-400' : 'bg-amber-50 hover:bg-amber-100'
        }`}
        onClick={onClick}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className={`flex items-center justify-center w-6 h-6 text-lg font-bold transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="p-6 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative md:sticky md:top-16">
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img
              src="/photos/vanjs_faqs.jpg"
              alt="VanJS Meetup Community"
              className="h-60 lg:h-120 md:h-140 object-cover"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">FAQs</h2>
            <p className="text-gray-600">Some frequent questions from our community</p>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
