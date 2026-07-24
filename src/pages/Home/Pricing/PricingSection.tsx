import CallToAction from "./CallToAction";
import PricingCard from "../../../components/ui/PricingCard";


const plans = [
  {
    title: "Free",
    price: "0",
    suffix: "/mo",
    buttonText: "Start free",
    popular: false,
    features: [
      "1,000 calls/day",
      "Basic analytics",
    ],
  },
  {
    title: "Starter",
    price: "49",
    suffix: "/mo",
    buttonText: "Upgrade",
    popular: true,
    features: [
      "Product registration",
      "5,000 calls/day",
    ],
  },
  {
    title: "Pro",
    price: "149",
    suffix: "/mo",
    buttonText: "Upgrade",
    popular: false,
    features: [
      "1,000 calls/day",
      "Onboarding API",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    suffix: "",
    buttonText: "Contact",
    popular: false,
    features: [
      "Unlimited Scale",
      "SLA + dedicated support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-15 bg-white">

      <div className="max-w-305 mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#36536B]">
          Simple pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              suffix={plan.suffix}
              buttonText={plan.buttonText}
              features={plan.features}
              popular={plan.popular}
            />
          ))}

        </div>
        <div>
          <CallToAction />
        </div>

      </div>

    </section>
  );
};

export default PricingSection;