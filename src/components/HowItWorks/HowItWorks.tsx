import howItWorksImage from "../../assets/how-it-works.png";
import { IoKeyOutline, IoLockClosedOutline, IoShirtOutline } from "react-icons/io5";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#36536B]">
          How it works
        </h2>

        {/* Main Content */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Image */}
          <div className="w-full lg:w-[55%] flex justify-center">
            <img
              src={howItWorksImage}
              alt="How It Works"
              className="w-full max-w-[500px] transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Right Timeline */}
          <div className="w-full lg:w-[45%] relative h-[480px] max-w-[420px] mx-auto lg:mx-0">
            
            {/* ================= STEP 1 ================= */}
            <div className="absolute w-32 flex flex-col items-center" style={{ top: "0px", left: "0px" }}>
              
              {/* Connector Line to Step 2 */}
              <div
                className="absolute border-t-[2.5px] border-r-[2.5px] border-[#36536B] rounded-tr-[4px]"
                style={{ top: "16px", left: "90px", width: "80px", height: "160px", zIndex: 0 }}
              ></div>

              {/* Circle & Icon */}
              <div className="relative group w-24 h-24 rounded-full bg-[#FAFCFD] border border-slate-100 shadow-md flex items-center justify-center z-10 transition-transform duration-300 hover:scale-105">
                {/* Number Badge */}
                <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 rounded-full bg-[#36536B] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm z-20">
                  1
                </div>
                <IoKeyOutline size={34} className="text-[#36536B]" />
              </div>
              
              <h3 className="mt-5 text-xl font-bold text-[#36536B] text-center leading-tight">
                Get API Key
              </h3>
            </div>

            {/* ================= STEP 2 ================= */}
            <div className="absolute w-32 flex flex-col items-center" style={{ top: "160px", left: "140px" }}>
              
              {/* Connector Line to Step 3 */}
              <div
                className="absolute border-t-[2.5px] border-r-[2.5px] border-[#36536B] rounded-tr-[4px]"
                style={{ top: "16px", left: "90px", width: "80px", height: "160px", zIndex: 0 }}
              ></div>

              {/* Circle & Icon */}
              <div className="relative group w-24 h-24 rounded-full bg-[#FAFCFD] border border-slate-100 shadow-md flex items-center justify-center z-10 transition-transform duration-300 hover:scale-105">
                {/* Number Badge */}
                <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 rounded-full bg-[#36536B] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm z-20">
                  2
                </div>
                <IoLockClosedOutline size={34} className="text-[#36536B]" />
              </div>
              
              <h3 className="mt-5 text-xl font-bold text-[#36536B] text-center leading-tight">
                Onboard Store
              </h3>
            </div>

            {/* ================= STEP 3 ================= */}
            <div className="absolute w-32 flex flex-col items-center" style={{ top: "320px", left: "280px" }}>
              
              {/* Circle & Icon */}
              <div className="relative group w-24 h-24 rounded-full bg-[#FAFCFD] border border-slate-100 shadow-md flex items-center justify-center z-10 transition-transform duration-300 hover:scale-105">
                {/* Number Badge */}
                <div className="absolute bottom-5 top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 rounded-full bg-[#36536B] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm z-20">
                  3
                </div>
                <IoShirtOutline size={34} className="text-[#36536B]" />
              </div>
              
              <h3 className="mt-5 text-xl font-bold text-[#36536B] text-center leading-tight">
                Predict Size
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;