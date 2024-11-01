import { useState, useRef } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I post my garage sale?",
      answer: (
        <>
          <ol className="space-y-6">
            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">1. Open the App</h3>
              <p className="text-gray-600">
                Launch Garage and Yard Sale and go to the "My Sale" section and
                go "Add Sale" section.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">2. Enter Sale Details</h3>
              <p className="text-gray-600">
                Add your sale date, time, and address to make it easy for
                shoppers to find you.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">
                3. Create an Eye-Catching Title
              </h3>
              <p>
                Use a title like "Huge Garage Sale—Furniture, Toys, Electronics
                & More!" to grab attention.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">4. Add Photos</h3>
              <p>
                Upload clear photos of your top items to attract more buyers.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">5. List Key Items</h3>
              <p>
                Mention popular items like "Books, Tools, Clothing, Kitchenware"
                to let shoppers know what to expect.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">6. Post & Share</h3>
              <p>
                Once you're happy with your post, hit "Publish" and share it
                with friends and neighbors to spread the word.
              </p>
            </li>
          </ol>

          <p className="mt-2 font-medium">
            Get ready for a successful garage and yard sale and turn your unused
            items into cash!
          </p>
        </>
      ),
    },
    {
      question: "How do I find sales near me?",
      answer: (
        <>
          <ol className="space-y-6">
            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-base">1. Open the App</h3>
              <p className="text-gray-600">
                Launch Garage and Yard Sale and navigate to the "Find Sales"
                tab.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-base">
                {" "}
                2. Enable Location Services{" "}
              </h3>
              <p className="text-gray-600">
                Allow location access so we can show sales closest to you.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-base">
                3. Browse the Map or List{" "}
              </h3>
              <p className="text-gray-600">
                Use the map view to see nearby sales or scroll through the list
                for details.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-base">
                {" "}
                4. Filter by Date & Category
              </h3>
              <p className="text-gray-600">
                Narrow down results by sale date or item types like “furniture,”
                “electronics,” or “kids’ toys” to find exactly what you’re
                looking for.
              </p>
            </li>

            <li className="flex flex-col gap-2">
              <h3 className="font-bold text-base">5. Save & Get Directions</h3>
              <p className="text-gray-600">
                Tap on any sale to save it to your list and get directions for
                easy navigation.
              </p>
            </li>
          </ol>
          <p className="mt-2">
            Ready to explore? Start finding the best deals around you with
            Garage and Yard Sale!
          </p>
        </>
      ),
    },
    {
      question: "Is it free to use the app?",
      answer:
        "Yes! Garage and Yard Sale is completely free to explore. You can browse and save garage and yard sales near you without any costs or hidden fees. Whether you're looking to find great deals or post your own sale, enjoy full access to all our features for free! Hence, it is costing 10$ to posting a sale for 3 days.",
    },
    {
      question: "What is the cost to post a sale?",
      answer:
        "Posting a sale on Garage and Yard Sale is minimal cost as 10$. Share your garage and yard sale details, add photos, and reach local shoppers without any other hassle and printing charges. Enjoy easy, cost-free posting to help make your sale a success!",
    },
  ];

  return (
    <div className="container w-full max-w-2xl mx-auto py-14">
      <h2 className="text-center text-4xl font-bold mb-14 text-brand-title-color">
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
        <div className="pb-4 text-gray-700 font-rethink text-base">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
