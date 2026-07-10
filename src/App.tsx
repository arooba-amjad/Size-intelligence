import Hero from "./components/Hero/Hero";
import Navbar from "./components/Hero/Navbar";
import ProblemSection from "./components/ProblemSection/ProblemSection";
import PricingSection from "./components/Pricing/PricingSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <PricingSection />
    </>
  );
}

export default App;