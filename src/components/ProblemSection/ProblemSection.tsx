import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";
import {
  FaBrain,
  FaPlug,
  FaChartLine,
} from "react-icons/fa6";

const stats = [
  {
    value: "30%",
    description:
      "of online fashion orders are returned—mostly due to wrong size",
  },
  {
    value: "$550B",
    description:
      "annual cost of ecommerce returns globally",
  },
  {
    value: "2×",
    description:
      "conversion lift when shoppers trust size recommendations",
  },
];

const features = [
  {
    icon: FaBrain,
    title: "ML + Chart Fusion",
    description:
      "Combines machine learning, product size charts, and brand fit profiles for accurate recommendations.",
  },
  {
    icon: FaPlug,
    title: "Auto Onboarding",
    description:
      "Connect Shopify or WooCommerce. We automatically extract sizing charts from your catalog.",
  },
  {
    icon: FaChartLine,
    title: "Self-Learning",
    description:
      "Feedback loop improves brand profiles using real purchase behavior over time.",
  },
];

const ProblemSection = () => {
  return (
    <section>

      {/* ================= Statistics Section ================= */}

      <div className="bg-white py-20">

        <div className="max-w-[1220px] mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-[#36536B]">
            The sizing problem costs billions
          </h2>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 mt-16">

            {stats.map((item) => (
              <div
                key={item.value}
                className="py-8 md:px-8"
              >
                <StatCard
                  value={item.value}
                  description={item.description}
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ================= Features Section ================= */}

      <div className="bg-[#F7F8FA] py-20">

        <div className="max-w-[1220px] mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-[#36536B]">
            One API. Intelligent sizing.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {features.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProblemSection;