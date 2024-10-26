import play_store from "../../src/assets/play_store.png";
import app_store from "../../src/assets/app_store.png";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Header = () => {
  return (
    <main className="container mx-auto px-4 py-14">
      <div className="text-center mt-12">
        <h1 className="text-5xl md:text-5xl font-bold mb-2">
          <span className="text-brand-red">Garage </span>
          <span className="text-brand-blue">& </span>
          <span className="text-brand-green">Yard </span>
          <span className="text-brand-red">Sale</span>
        </h1>
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-brand-brown">
          Easily, Safely & Quickly.
        </h2>
        <p className="text-2xl mb-4 font-medium text-brand-brown">
          Show Your Presence In Your Neighborhood.
        </p>

        <div className="my-12">
          <ImageCarousel />
        </div>

        <p className="text-base font-bold mb-4 text-brand-blue mt-12">
          Download our app:
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="inline-block">
            <img
              src={play_store}
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
          <a href="#" className="inline-block">
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
