import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import CodeWindow from "./CodeWindow"; 

const Integration = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] flex items-center justify-center">
      <div className="max-w-[1220px] w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-[40%] text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-[#36536B] leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Integrate in 5 lines
          </motion.h2>
          <motion.p
            className="mt-4 text-2xl text-[#36536B] leading-snug"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            Simple SDK. <br />
            Powerful results.
          </motion.p>
          <motion.button
            className="mt-8 bg-[#36536B] hover:bg-[#2B4356] text-white px-5 py-3 rounded-md font-medium text-lg flex items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Docs <FaArrowRight className="ml-2 text-sm" />
          </motion.button>
        </motion.div>

        {/* Right Code Block */}
        <motion.div
          className="w-full lg:w-[55%] border border-gray-400"
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <CodeWindow />
        </motion.div>

      </div>
    </section>
  );
};

export default Integration;