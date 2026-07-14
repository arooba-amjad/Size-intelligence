import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa6";

interface PricingCardProps {
  title: string;
  price: string;
  suffix: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard = ({
  title,
  price,
  suffix,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) => {
  return (
    <motion.div
      className={`relative rounded-2xl border border-[#AFC1D2] bg-white p-6 ${
        popular ? "shadow-lg" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    >
      {/* Popular Badge */}

      {popular && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.5, y: 5 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
        >
          <span className="bg-[#36536B] text-white text-xs font-semibold px-4 py-1 rounded-full">
            Popular
          </span>
        </motion.div>
      )}

      {/* Title */}

      <motion.h3
        className="text-3xl font-semibold text-[#36536B]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        {title}
      </motion.h3>

      {/* Price */}

      <motion.div
        className="mt-4 flex items-end"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >

        <span className="text-5xl font-bold text-[#36536B]">

          {price === "Custom" ? price : `$${price}`}

        </span>

        {suffix && (
          <span className="ml-1 mb-1 text-2xl text-[#36536B]">
            {suffix}
          </span>
        )}

      </motion.div>

      {/* Features */}

      <div className="mt-8 space-y-4">

        {features.map((feature, index) => (

          <motion.div
            key={feature}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
          >

            <FaCheck
              className="mt-1 text-[#36536B]"
            />

            <span className="text-lg text-[#36536B]">
              {feature}
            </span>

          </motion.div>

        ))}

      </div>

      {/* Button */}

      <motion.button
        className={`mt-10 w-full rounded-xl py-3 font-semibold cursor-pointer
        ${
          popular
            ? "bg-[#6D9ED4] text-white hover:bg-[#5A8CC2]"
            : "border border-[#36536B] text-[#36536B] hover:bg-[#36536B] hover:text-white"
        }`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 + features.length * 0.08, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;