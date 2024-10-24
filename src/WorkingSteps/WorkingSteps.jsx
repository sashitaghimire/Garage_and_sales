import nothing_phone from "../assets/nothing_phone.png";
import box from "../assets/icons/box.png";
import navigation from "../assets/icons/navigation.png";
import search from "../assets/icons/search.png";
import sign_up from "../assets/icons/sign_up.png";

// Reusable Step Component
const Step = ({ title, description, icon }) => (
  <div className="items-center gap-4 lg:gap-6">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green rounded-3xl flex items-center justify-center">
      <img src={icon} alt={title} />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const WorkingSteps = () => {
  const stepsData = [
    {
      title: "1. Sign Up Easily",
      description: "Create an account with your Email and a secure password.",
      icon: sign_up,
    },
    {
      title: "2. Find Sales or Post Your Own",
      description:
        "Browse nearby garage and yard sales, or list your items for sale with just a few taps.",
      icon: search,
    },
    {
      title: "3. Seamless Navigation",
      description:
        "Effortlessly search, filter, and explore products within your area.",
      icon: navigation,
    },
    {
      title: "4. Complete the Sale",
      description:
        "Sell your items quickly and securely, and watch your sale go live for a full week.",
      icon: box,
    },
  ];

  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>

      <div className="flex flex-col lg:flex-row items-center lg:gap-12">
        {/* Left Column - Steps 1 & 3 */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          {stepsData.slice(0, 2).map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              firstRow
            />
          ))}
        </div>

        {/* Phone Image in Center */}
        <div className="flex-shrink-0 my-10 lg:my-0">
          <div className="w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-gray-200 rounded-full flex items-center justify-center">
            <div className="w-56 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 bg-brand-green rounded-full flex items-center justify-center">
              <img
                src={nothing_phone}
                alt="App screenshot"
                className="w-36 sm:w-40 lg:w-48 rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Steps 2 & 4 */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          {stepsData.slice(2).map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
