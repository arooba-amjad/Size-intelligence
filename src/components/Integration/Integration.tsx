import { FaArrowRight } from "react-icons/fa6";
import CodeWindow from "./CodeWindow"; 

const Integration = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] flex items-center justify-center">
      <div className="max-w-[1220px] w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-[40%] text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#36536B] leading-tight">
            Integrate in 5 lines
          </h2>
          <p className="mt-4 text-2xl text-[#36536B] leading-snug">
            Simple SDK. <br />
            Powerful results.
          </p>
          <button className="mt-8 bg-[#36536B] hover:bg-[#2B4356] text-white px-5 py-3 rounded-md font-medium text-lg flex items-center transition-all duration-300">
            View Docs <FaArrowRight className="ml-2 text-sm" />
          </button>
        </div>

        {/* Right Code Block */}
        <div className="w-full lg:w-[55%] border border-gray-400">
          <CodeWindow />
        </div>

      </div>
    </section>
  );
};

export default Integration;