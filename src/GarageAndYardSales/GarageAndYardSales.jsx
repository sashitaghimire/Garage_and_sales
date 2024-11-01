import box from "../assets/icons/box.png";
import compass from "../assets/icons/compass.png";
import rocket from "../assets/icons/rocket.png";
import security from "../assets/icons/security.png";
import connection from "../assets/icons/connection.png";
import eco from "../assets/icons/eco.png";
import clean from "../assets/icons/clean.png";
import save_money from "../assets/icons/save-money.png";

// FeatureCard Component
const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full sm:w-2/5 lg:w-1/4 p-3 my-2">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-brand-brown rounded-2xl flex items-center justify-center mb-3">
          <img src={imgSrc} alt={title} />
        </div>
        <h3 className="font-semibold mb-1 font-rethink text-brand-text-color text-base leading-6	text-center">
          {title}
        </h3>
        <p className="text-base text-center max-w-[400px] font-rethink text-brand-light-text-color leading-6	">
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
      title: "1. Sell Easily, Earn Easily",
      description:
        "Post your garage or yard sale with images, details, and dates. Clear out unwanted items while making extra money on the spot.",
    },
    {
      imgSrc: rocket,
      title: "2. Good way to make a Treasure ",
      description: (
        <>
          A garage or yard sale turns your unwanted items into valuable finds
          for others, making them "treasures" instead of "trash."
        </>
      ),
    },
    {
      imgSrc: compass,
      title: "3. Find Nearby Sales",
      description:
        "Search for sales happening around your neighborhood using a map or list view.",
    },

    {
      imgSrc: security,
      title: "4. Safe and Secure",
      description: (
        <>Contact sellers or buyers within the app for a safe transaction.</>
      ),
    },
    {
      imgSrc: eco,
      title: "5. Eco Friendly",
      description: (
        <>
          Reduce waste by giving your items a second life and promoting reuse
          within the community.
        </>
      ),
    },
    {
      imgSrc: save_money,
      title: "6. No Extra Costs  ",
      description: (
        <>
          Avoid shipping fees or platform charges or placard costs—everything is
          sold in person, saving you and the buyer money.
        </>
      ),
    },
    {
      imgSrc: connection,
      title: "7. Community Connection  ",
      description: (
        <>
          Set your own prices, hours, and enjoy a hassle-free selling experience
          right from your home.
        </>
      ),
    },
    {
      imgSrc: clean,
      title: "8. Keep your Neighborhood Clean",
      description: (
        <>
          Host a garage sale! Clear out clutter without crowding the streets and
          turn your space into a treasure trove for local shoppers.
        </>
      ),
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
