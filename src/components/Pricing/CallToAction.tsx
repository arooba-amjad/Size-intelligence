const CallToAction = () => {
  return (
    <section className="py-10 flex justify-center px-6">
      
      <div className="relative w-full max-w-[1200px] bg-gradient-to-r from-[#7a9ebb] via-[#355872] to-[#7a9ebb] rounded-xl overflow-hidden shadow-md">
        
        {/* ================= DECORATIVE RINGS ================= */}
        
        {/* Top Left */}
        <div className="absolute -top-24 -left-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>
        <div className="absolute -top-36 -left-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>

        {/* Top Right */}
        <div className="absolute -top-24 -right-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>
        <div className="absolute -top-36 -right-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>

        {/* Bottom Left */}
        <div className="absolute -bottom-24 -left-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-36 -left-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>

        {/* Bottom Right */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-36 -right-36 w-72 h-72 border-[3.5px] border-[#1e3b56]/15 rounded-full pointer-events-none"></div>

        {/* ================= CONTENT ================= */}
        
        <div className="relative z-10 px-8 py-16 flex flex-col items-center text-center">
          
          <h2 className="text-3xl md:text-[34px] font-bold text-white mb-3">
            Start building today
          </h2>
          
          <p className="text-[17px] text-white/95 mb-8 font-medium tracking-wide">
            No credit card required. 1,000 free API calls per day.
          </p>
          
          <button className="bg-white text-[#355872] font-semibold text-[16px] px-7 py-3.5 rounded-md shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
            Get your API Key
          </button>

        </div>
        
      </div>
      
    </section>
  );
};

export default CallToAction;