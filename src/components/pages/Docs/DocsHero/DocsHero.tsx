import React from "react";
import docshero from "../../../../assets/docshero.jpeg"; 

const DocsHero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-14 flex items-center justify-center">
      <div className="max-w-305 w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* ================= Left Content ================= */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          
          <span className="text-[#36536B] font-bold text-lg md:text-[19px] mb-3 tracking-wide">
            Developer documentation v1
          </span>
          
          <h1 className="text-[40px] md:text-5xl lg:text-[56px] font-extrabold text-[#36536B] leading-[1.15] mb-5 tracking-tight">
            Size Intelligence API <br />
            for <span className="text-[#81A9C8]">Ecommerce</span>
          </h1>
          
          <p className="text-[#6B7C8E] text-lg md:text-[20px] max-w-120 leading-relaxed font-medium">
            Integrate AI-powered recommendations seamlessly into your ecommerce platform.
          </p>
          
        </div>

        {/* ================= Right Image ================= */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={docshero}
            alt="API Documentation Hero Illustration"
            className="w-full max-w-137 object-contain drop-shadow-sm transition-transform duration-500 hover:-translate-y-1"
          />
        </div>

      </div>
    </section>
  );
};

export default DocsHero;