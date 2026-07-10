import Hero from "./components/Hero/Hero";
import Navbar from "./components/Hero/Navbar";
import ProblemSection from "./components/ProblemSection/ProblemSection";
import PricingSection from "./components/Pricing/PricingSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Integration from "./components/Integration/Integration";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Integration />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;