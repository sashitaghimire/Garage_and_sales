import mobile_phone from "../assets/mobile.png";
import box from "../assets/icons/box.png";
import navigation from "../assets/icons/navigation.png";
import search from "../assets/icons/search.png";
import sign_up from "../assets/icons/sign_up.png";

// Reusable Step Component
const Step = ({ title, description, icon }) => (
  <div className={`flex flex-col items-center gap-4 lg:gap-6 mb-5`}>
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green rounded-3xl flex items-center justify-center">
      <img src={icon} alt={title} />
    </div>
    <div className={`text-center`}>
      <h3 className="font-bold text-base mb-1 font-rethink leading-6">
        {title}
      </h3>
      <p className="text-base text-gray-600 font-rethink leading-6	">
        {description}
      </p>
    </div>
  </div>
);

const WorkingSteps = () => {
  const stepsDataRight = [
    {
      title: "2. Seamless Navigation",
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
  const stepsDataLeft = [
    {
      title: "1. Sign Up Easily",
      description: "Create an account with your Email and a secure password.",
      icon: sign_up,
    },
    {
      title: "3. Find Sales or Post Your Own",
      description:
        "Browse nearby garage and yard sales, or list your items for sale with just a few taps.",
      icon: search,
    },
  ];
  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-14 text-brand-title-color">
        How It Works
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:gap-12">
        <div className=" flex flex-col gap-8 lg:w-1/3 text-center">
          {stepsDataLeft?.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>

        <div className="flex-shrink-0 my-10 lg:my-0">
          <img src={mobile_phone} alt="App screenshot" />
        </div>

        <div className="flex flex-col gap-8 lg:w-1/3 text-center">
          {stepsDataRight?.map((step, index) => (
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
