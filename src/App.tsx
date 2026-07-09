import Hero from "./components/Hero/Hero";
import Navbar from "./components/Hero/Navbar";
import ProblemSection from "./components/ProblemSection/ProblemSection";
import PricingSection from "./components/Pricing/PricingSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <PricingSection />
    </>
  );
}

export default App;