import box from "../assets/icons/box.png";
import compass from "../assets/icons/compass.png";
import rocket from "../assets/icons/rocket.png";

// FeatureCard Component
const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-brand-brown rounded-3xl flex items-center justify-center mb-4">
          <img src={imgSrc} alt={title} />
        </div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-center max-w-xs">{description}</p>
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
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
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
