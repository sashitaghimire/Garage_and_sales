import play_store from "../assets/play_store.png";
import app_store from "../assets/app_store.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import tiktok from "../assets/icons/tiktok.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className=" bg-brand-blue text-white py-6 md:py-10 rounded-md">
        <div className="mx-5 px-5">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-rethink">
              Garage and Yard Sale
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed font-rethink">
              Garage and Yard Sale App is a user-friendly platform that allows
              you to easily buy and sell items from local garage and yard sales
              in your community. With simple sign-up, seamless navigation, and
              secure transactions, you can find great deals nearby or post your
              own sales to reach buyers. Sell your items fast and hassle-free,
              all while connecting with your neighbors!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row mb-6 space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#!" className="inline-block w-36 sm:w-auto">
                <img
                  src={play_store}
                  alt="Google Play"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a href="#!" className="inline-block w-36 sm:w-auto">
                <img
                  src={app_store}
                  alt="App Store"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-4 mb-6 font-rethink">
              {[
                { icon: facebook, name: "Facebook" },
                { icon: instagram, name: "Instagram" },
                { icon: youtube, name: "YouTube" },
                { icon: tiktok, name: "TikTok" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="hover:opacity-75 transition-opacity"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-500 mt-6 md:mt-8 pt-6 text-xs md:text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-center md:text-left font-rethink">
                Copyright © 2024 Garage&Yard. All rights reserved
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 font-rethink">
                <Link to="/privacy-policy" className="hover:underline ">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
