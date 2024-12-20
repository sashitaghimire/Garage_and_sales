import play_store from "../../src/assets/play_store.png";
import app_store from "../../src/assets/app_store.png";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Header = () => {
  return (
    <main className="container mx-auto px-4 py-14">
      <div className="text-center mt-12">
        <div className="text-6xl font-extrabold mb-2">
          <span className="text-brand-brown">Find </span>
          <span className="text-brand-red">Garage </span>
          <span className="text-brand-blue">& </span>
          <span className="text-brand-green">Yard </span>
          <span className="text-brand-red">Sale</span>
        </div>
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-brand-brown">
          Simple, Secure & Fast.
        </h2>
        <p className="text-xl mb-4 font-bold text-brand-brown">
          Connect with Sellers and Buyers In Your Neighborhood
        </p>

        <div className="my-12">
          <ImageCarousel />
        </div>

        <p className="text-base font-bold mb-4 text-brand-blue mt-12 font-rethink">
          Download our app:
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.sale.garageyard&hl=en_US&gl=US"
            className="inline-block"
            target="_blank"
          >
            <img
              src={play_store}
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>

          <a
            href="https://apps.apple.com/us/app/garageyard/6737464722"
            className="inline-block"
            target="_blank"
          >
            <img
              src={app_store}
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Header;
