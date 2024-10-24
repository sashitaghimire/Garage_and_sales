import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import GarageAndYardSales from "../GarageAndYardSales/GarageAndYardSales";
import DownloadApp from "../DownloadApp/DownloadApp";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
import Footer from "../Footer/Footer";
import WorkingSteps from "../WorkingSteps/WorkingSteps";

const Home = () => {
  return (
    <div className="bg-brand-light-border-pink p-6">
      <section id="home">
        <Navbar />
        <Header />
      </section>
      <section id="why_choose_us">
        <GarageAndYardSales />
      </section>
      <section id="how_it_works">
        <WorkingSteps />
      </section>
      <section id="get_the_app">
        <DownloadApp />
      </section>
      <section id="faqs">
        <FAQAccordion />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
