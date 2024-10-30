import { useState, useRef } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div className="container w-full max-w-2xl mx-auto py-14">
      <h2 className="text-center text-4xl font-semibold mb-14 text-brand-title-color">
        Frequently asked questions
      </h2>
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ item, isActive, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200 pb-5">
      <button
        onClick={onClick}
        className="flex justify-between w-full py-4 text-basefont-medium text-left focus:outline-none font-rethink"
      >
        {item.question}
        <span className="transform transition-transform duration-300 ease-in-out">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isActive ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isActive ? contentRef.current?.scrollHeight + "px" : "0",
        }}
      >
        <div className="pb-4 text-gray-700 font-rethink">{item.answer}</div>
      </div>
    </div>
  );
};

export default FAQAccordion;
