import Hero from "./Hero";
import ProblemSection from "./ProblemSection/ProblemSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import Integration from "./Integration/Integration";
import PricingSection from "./Pricing/PricingSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Integration />
      <PricingSection />
    </>
  );
};

export default Home;