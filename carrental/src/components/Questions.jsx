import React, { useState } from 'react';

function AccordionItem({ id, title, content, isOpen, toggleAccordion }) {
  return (
    
    <div className="border rounded mb-4 overflow-hidden">
      <button
        className={`w-full text-left p-3 border-b focus:outline-none transition-all duration-500 ${isOpen ? 'bg-yellow-500 text-white' : 'bg-white text-black'}`}
        onClick={() => toggleAccordion(id)}
      >
        <span className="flex items-center justify-between font-bold">
          <span>{title}</span>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            &#9660;
          </span>
        </span>
      </button>
      <div className={`p-3 bg-gray-100 text-gray-700 ${isOpen ? 'block' : 'hidden'}`}>
        {content}
      </div>
    </div>
  );
}

function App() {
  const [accordions, setAccordions] = useState([
    { id: 1, title: "What is special about comparing rental car deals?", content: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.", isOpen: false },
    { id: 2, title: "How do I find the car rental deals?", content: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.", isOpen: false },
    { id: 3, title: "How do I find such low rental car prices?", content: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.", isOpen: false }
  ]);

  const toggleAccordion = (accordionId) => {
    const updatedAccordions = accordions.map(accordion => {
      if (accordion.id === accordionId) {
        return { ...accordion, isOpen: !accordion.isOpen };
      } else {
        return { ...accordion, isOpen: false };
      }
    });
    setAccordions(updatedAccordions);
  };

  return (
    <div>

<div className='flex flex-col justify-center items-center '>
<p className=' mt-5 p-2 text-xl font-bold'>FAQ</p>
<p className='p-2 text-4xl  font-extrabold'>Frequently Asked Questions</p>
<p className='p-3 mb-4   text-gray-700 '>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>

</div>

      <div className="accordion-container mx-auto px-4 py-8 max-w-2xl">
      {accordions.map(({ id, title, content, isOpen }) => (
        <AccordionItem
          key={id}
          id={id}
          title={title}
          content={content}
          isOpen={isOpen}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
    </div>

  );
}

export default App;
