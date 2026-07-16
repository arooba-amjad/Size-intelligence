import shirtImage from "../../assets/tshirt.png";
import { FaWeightHanging, FaArrowUp } from "react-icons/fa6";
import { FiUser, FiTag } from "react-icons/fi";
import { motion } from "motion/react";

const DashboardCard = () => {
  return (
    <div className="bg-[#1C3A4D] rounded-[28px] border border-white/5 shadow-2xl p-6 w-full max-w-[540px] text-white font-sans relative overflow-hidden">
      
      {/* Top Section */}
      <div className="flex justify-between relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col w-[55%]">
          <p className="text-sm text-[#87A8BB] font-medium tracking-wide">
            Recommended Size
          </p>
          <h2 className="text-[84px] font-bold text-[#62E0D1] leading-[0.95] mt-1 tracking-tight drop-shadow-lg">
            M
          </h2>

          <div className="mt-8">
            <p className="text-sm text-[#87A8BB] font-medium tracking-wide">
              Confidence Score
            </p>
            <h3 className="text-[34px] font-bold text-[#42E0C8] leading-tight mt-0.5">
              98%
            </h3>
            
            {/* Custom Progress Bar */}
            <div className="mt-3 w-[90%] h-2.5 bg-[#122A3A] rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-[#42E0C8] rounded-full shadow-[0_0_10px_#42E0C8]"
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Content - Shirt Image */}
        <div className="absolute -top-4 -right-4 w-[55%] h-[130%] flex justify-end z-0 pointer-events-none">
            <motion.img
              src={shirtImage}
              alt="Product Wireframe"
              className="w-full h-auto object-contain drop-shadow-2xl mix-blend-screen"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
        </div>

      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-3 mt-8 relative z-10">
        
        <div className="bg-[#24455A]/80 border border-white/5 rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md">
          <FiUser className="text-[#62E0D1] text-2xl" strokeWidth={1.5} />
          <div className="flex flex-col">
            <p className="text-[11px] text-[#87A8BB] font-medium">Height</p>
            <p className="text-[15px] font-bold tracking-wide mt-0.5">175 cm</p>
          </div>
        </div>

        <div className="bg-[#24455A]/80 border border-white/5 rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md">
          <FaWeightHanging className="text-[#62E0D1] text-[20px]" />
          <div className="flex flex-col">
            <p className="text-[11px] text-[#87A8BB] font-medium">Weight</p>
            <p className="text-[15px] font-bold tracking-wide mt-0.5">70 kg</p>
          </div>
        </div>

        <div className="bg-[#24455A]/80 border border-white/5 rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md">
          <FiTag className="text-[#62E0D1] text-[22px]" strokeWidth={1.5} />
          <div className="flex flex-col">
            <p className="text-[11px] text-[#87A8BB] font-medium">Brand</p>
            <p className="text-[15px] font-bold tracking-wide mt-0.5">Nike</p>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-[#24455A]/80 border border-white/5 rounded-[20px] p-5 mt-4 flex items-center justify-between relative z-10 backdrop-blur-md">
        
        {/* Metric */}
        <div className="flex flex-col">
          <p className="text-sm text-[#87A8BB] font-medium tracking-wide">
            Return Reduction
          </p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-[28px] font-bold text-[#42E0C8] leading-none">
              70%
            </h3>
            <FaArrowUp className="text-[#42E0C8] text-[15px] mt-1" />
          </div>
        </div>

        {/* SVG Graph */}
        <div className="w-[55%] h-14 relative flex items-end">
          <svg 
            viewBox="0 0 100 40" 
            className="w-full h-full overflow-visible" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#42E0C8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#42E0C8" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Filled Area */}
            <motion.path 
              d="M0 35 C 10 35, 15 25, 25 30 C 35 35, 40 25, 50 30 C 60 35, 65 25, 75 25 C 85 25, 95 10, 100 5 L 100 40 L 0 40 Z" 
              fill="url(#graphGradient)" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            />
            {/* Line Path */}
            <motion.path 
              d="M0 35 C 10 35, 15 25, 25 30 C 35 35, 40 25, 50 30 C 60 35, 65 25, 75 25 C 85 25, 95 10, 100 5" 
              fill="none" 
              stroke="#42E0C8" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="drop-shadow-[0_0_4px_#42E0C8]"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            />
            {/* Glowing Dot at the end */}
            <motion.circle 
              cx="100" 
              cy="5" 
              r="2.5" 
              fill="#fff" 
              className="drop-shadow-[0_0_5px_#42E0C8]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.4, 1, 1.3, 1], 
                opacity: 1 
              }}
              transition={{ 
                duration: 1.8, 
                delay: 1.6, 
                times: [0, 0.3, 0.5, 0.7, 1],
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </svg>
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;