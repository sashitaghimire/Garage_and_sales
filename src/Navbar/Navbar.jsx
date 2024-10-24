import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "why_choose_us", label: "Why Choose Us" },
    { href: "how_it_works", label: "How it works" },
    { href: "get_the_app", label: "Get the App" },
    { href: "faqs", label: "FAQs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);

    if (element) {
      const navHeight = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-light-border-pink py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 object-cover rounded-lg mt-2"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${
                    activeSection === link.href
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isOpen ? " X" : "    ="}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-20 transition-all duration-300 ease-in-out transform`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${
                    activeSection === link.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
