import { motion } from "motion/react";
import Button from "../../common/button/Button";

const LeftSection = () => {
  return (
    <div className="w-full lg:w-[45%] text-white">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-white text-[#36536B] rounded-full px-5 py-2 text-sm font-medium"
      >
        ✨ Developer-first sizing API
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 text-[42px] lg:text-[50px] font-bold leading-[1.05]"
      >
        Size Intelligence API

        <br />

        for{" "}

        <span className="text-[#8CC6FF]">
          Ecommerce
        </span>

      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-[18px] font-bold leading-8 max-w-130"
      >
        Reduce returns. Improve fit. One API call to recommend
        the perfect clothing size using ML, size charts,
        and brand intelligence.
      </motion.p>

      {/* Platforms */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-wrap gap-3 mt-8 text-xl"
      >
        <span>Shopify |</span>

        <span>Woo-Commerce |</span>

        <span>Custom Ecommerce</span>
      </motion.div>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap"
      >
        <Button text="Try Demo →" />

        <Button
          text="View Documentation"
          variant="secondary"
        />
      </motion.div>

    </div>
  );
};

export default LeftSection;