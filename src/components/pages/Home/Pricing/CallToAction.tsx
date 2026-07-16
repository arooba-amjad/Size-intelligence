import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <section className="py-10 flex justify-center px-6">
      
      <motion.div
        className="relative w-full max-w-[1200px] bg-gradient-to-r from-[#7a9ebb] via-[#355872] to-[#7a9ebb] rounded-xl overflow-hidden shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        
        {/* ================= DECORATIVE RINGS ================= */}
        
        {/* Top Left */}
        <motion.div
          className="absolute -top-24 -left-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute -top-36 -left-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>

        {/* Top Right */}
        <motion.div
          className="absolute -top-24 -right-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute -top-36 -right-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        ></motion.div>

        {/* Bottom Left */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-36 -left-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        ></motion.div>

        {/* Bottom Right */}
        <motion.div
          className="absolute -bottom-24 -right-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-36 -right-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.75 }}
        ></motion.div>

        {/* ================= CONTENT ================= */}
        
        <div className="relative z-10 px-8 py-16 flex flex-col items-center text-center">
          
          <motion.h2
            className="text-3xl md:text-[34px] font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            Start building today
          </motion.h2>
          
          <motion.p
            className="text-[17px] text-white/95 mb-8 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            No credit card required. 1,000 free API calls per day.
          </motion.p>
          
          <motion.button
            className="bg-white text-[#355872] font-semibold text-[16px] px-7 py-3.5 rounded-md shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            Get your API Key
          </motion.button>

        </div>
        
      </motion.div>
      
    </section>
  );
};

export default CallToAction;