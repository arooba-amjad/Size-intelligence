import { motion } from "motion/react";
import howItWorksImage from "../../../../assets/how-it-works.png";
import { IoKeyOutline, IoLockClosedOutline, IoShirtOutline } from "react-icons/io5";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-305 mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center text-[#36536B]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How it works
        </motion.h2>

        {/* Main Content */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Image */}
          <motion.div
            className="w-full lg:w-[55%] flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={howItWorksImage}
              alt="How It Works"
              className="w-full max-w-125 transition-all duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Right Timeline */}
          <div className="w-full lg:w-[45%] relative h-120 max-w-105 mx-auto lg:mx-0">
            
            {/* ================= STEP 1 ================= */}
            <motion.div
              className="absolute w-32 flex flex-col items-center"
              style={{ top: "0px", left: "0px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              
              {/* Connector Line to Step 2 */}
              <motion.div
                className="absolute border-t-[2.5px] border-r-[2.5px] border-[#36536B] rounded-tr-sm origin-top-left"
                style={{ top: "16px", left: "90px", width: "80px", height: "160px", zIndex: 0 }}
                initial={{ opacity: 0, pathLength: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              ></motion.div>

              {/* Circle & Icon */}
              <motion.div
                className="relative group w-24 h-24 rounded-full bg-[#FAFCFD] border border-slate-100 shadow-md flex items-center justify-center z-10"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              >
                {/* Number Badge */}
                <motion.div
                  className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 rounded-full bg-[#36536B] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.4, ease: "backOut" }}
                >
                  1
                </motion.div>
                <IoKeyOutline size={34} className="text-[#36536B]" />
              </motion.div>
              
              <h3 className="mt-5 text-xl font-bold text-[#36536B] text-center leading-tight">
                Get API Key
              </h3>
            </motion.div>

            {/* ================= STEP 2 ================= */}
            <motion.div
              className="absolute w-32 flex flex-col items-center"
              style={{ top: "160px", left: "140px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              
              {/* Connector Line to Step 3 */}
              <motion.div
                className="absolute border-t-[2.5px] border-r-[2.5px] border-[#36536B] rounded-tr-sm origin-top-left"
                style={{ top: "16px", left: "90px", width: "80px", height: "160px", zIndex: 0 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              ></motion.div>

              {/* Circle & Icon */}
              <motion.div
                className="relative group w-24 h-24 rounded-full bg-[#FAFCFD] border border-slate-100 shadow-md flex items-center justify-center z-10"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
              >
                {/* Number Badge */}
                <motion.div
                  className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 rounded-full bg-[#36536B] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.9, ease: "backOut" }}
                >
                  2
                </motion.div>
                <IoLockClosedOutline size={34} className="text-[#36536B]" />
              </motion.div>
              
              <h3 className="mt-5 text-xl font-bold text-[#36536B] text-center leading-tight">
                Onboard Store
              </h3>
            </motion.div>

            {/* ================= STEP 3 ================= */}
            <motion.div
              className="absolute w-32 flex flex-col items-center"
              style={{ top: "320px", left: "280px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
            >
              
              {/* Circle & Icon */}
              <motion.div
                className="relative group w-24 h-24 rounded-full bg-[#FAFCFD] border border-slate-100 shadow-md flex items-center justify-center z-10"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.15, ease: "easeOut" }}
              >
                {/* Number Badge */}
                <motion.div
                  className="absolute bottom-5 top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 rounded-full bg-[#36536B] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 1.4, ease: "backOut" }}
                >
                  3
                </motion.div>
                <IoShirtOutline size={34} className="text-[#36536B]" />
              </motion.div>
              
              <h3 className="mt-5 text-xl font-bold text-[#36536B] text-center leading-tight">
                Predict Size
              </h3>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;