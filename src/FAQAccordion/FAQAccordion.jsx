import { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqItems = [
    {
      question: "How do I post my garage sale?",
      answer: "You can post your garage sale by ...",
    },
    {
      question: "How do I find sales near me?",
      answer: "To find sales near you, ...",
    },
    {
      question: "Is it free to use the app?",
      answer: "Yes, the app is free to use ...",
    },
    {
      question: "What is the cost to post a sale?",
      answer: "Posting a sale is free ...",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-14">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Frequently asked questions
      </h2>
      {faqItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-5">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full py-4 text-lg font-medium text-left focus:outline-none"
          >
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
