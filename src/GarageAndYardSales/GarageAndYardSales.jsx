import box from "../assets/icons/box.png";
import compass from "../assets/icons/compass.png";
import rocket from "../assets/icons/rocket.png";

// FeatureCard Component
const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full sm:w-2/5 lg:w-1/4 p-3">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-brand-brown rounded-2xl flex items-center justify-center mb-3">
          <img src={imgSrc} alt={title} />
        </div>
        <h3 className="font-semibold mb-1 font-rethink text-brand-text-color text-base leading-6	">
          {title}
        </h3>
        <p className="text-base text-center max-w-[250px] font-rethink text-brand-light-text-color leading-6	">
          {description}
        </p>
      </div>
    </div>
  );
};

const GarageAndYardSales = () => {
  const features = [
    {
      imgSrc: box,
      title: "1. Sell Easily",
      description:
        "Post your garage or yard sale with images, details, and dates.",
    },
    {
      imgSrc: compass,
      title: "2. Find Nearby Sales",
      description:
        "Search for sales happening around your neighborhood using a map or list view.",
    },
    {
      imgSrc: rocket,
      title: "3. Safe and Secure",
      description:
        "Contact sellers or buyers within the app for a safe transaction.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-14 text-brand-title-color">
        Why Choose Garage and Yard Sale?
      </h1>

      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GarageAndYardSales;
