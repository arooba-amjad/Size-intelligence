import { motion } from "motion/react";
import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";
import { FaBrain, FaPlug, FaChartLine } from "react-icons/fa6";
import { FiRotateCcw, FiUsers } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";

const stats = [
  {
    icon: FiRotateCcw,
    value: "30%",
    description:
      "of online fashion orders are returned—mostly due to wrong size",
  },
  {
    icon: BiDollarCircle,
    value: "$550B",
    description: "annual cost of ecommerce returns globally",
  },
  {
    icon: FiUsers,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ProblemSection = () => {
  return (
    <section>

      {/* ================= Statistics Section ================= */}

      <div className="bg-white py-20">

        <div className="max-w-[1220px] mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-center text-[#36536B]"
          >
            The sizing problem costs billions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 mt-16"
          >
            {stats.map((item) => (
              <motion.div
                key={item.value}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
                className="py-8 md:px-8"
              >
                <StatCard
                  icon={item.icon}
                  value={item.value}
                  description={item.description}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>

      {/* ================= Features Section ================= */}

      <div className="bg-[#F7F8FA] py-20">

        <div className="max-w-[1220px] mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-center text-[#36536B]"
          >
            One API. Intelligent sizing.
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {features.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ProblemSection;