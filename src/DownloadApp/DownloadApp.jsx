import play_store from "../assets/play_store.png";
import app_store from "../assets/app_store.png";
import qr_code from "../assets/qr_code.png";

const DownloadApp = () => {
  return (
    <div className=" bg-brand-light-orange p-6 md:p-10 rounded-lg px-4">
      <div className=" container flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-4">
        {/* Left section with text and store buttons */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-brand-brown mb-2">
            Download this App Today!
          </h3>
          <p className="text-sm text-brand-brown mb-4">
            Buy and sell your stuffs Easily, safely and quickly.
          </p>
          {/* Store buttons container */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-4">
            <a
              href="#"
              className="transform hover:scale-105 transition-transform"
            >
              <img
                src={play_store}
                alt="Get it on Google Play"
                className="h-10 w-auto object-contain"
              />
            </a>
            <a
              href="#"
              className="transform hover:scale-105 transition-transform"
            >
              <img
                src={app_store}
                alt="Download on the App Store"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Right section with QR code */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs text-center text-brand-brown mb-2">Scan Here</p>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-45 md:h-45">
            <img
              src={qr_code}
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-brand-brown">And</p>
            <p className="text-xs text-brand-brown mt-1">
              show your presence in your neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
