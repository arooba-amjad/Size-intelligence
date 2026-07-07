import ProgressBar from "./ProgressBar";
import InfoCard from "./InfoCard";

const DashboardCard = () => {
  return (
    <div className="bg-[#204B64] rounded-[32px] border border-[#2C617C] shadow-2xl p-6 w-full max-w-[540px] text-white">

      {/* Top */}

      <div className="grid grid-cols-2 gap-6">

        {/* Left */}

        <div>

          <p className="text-sm text-gray-300">
            Recommended Size
          </p>

          <h2 className="text-[72px] font-bold text-[#69E4E8] leading-none mt-2">
            M
          </h2>

          <p className="mt-6 text-gray-300">
            Confidence Score
          </p>

          <h3 className="text-[42px] font-bold text-[#42E0C8]">
            98%
          </h3>

          <div className="mt-3">
            <ProgressBar percentage={98} />
          </div>

        </div>

        {/* Shirt */}

        <div className="flex items-center justify-center">

          <div className="w-48 h-48 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center">

            <span className="text-cyan-300">
              Product Image
            </span>

          </div>

        </div>

      </div>

      {/* Info Cards */}

      <div className="grid grid-cols-3 gap-3 mt-6">

        <InfoCard title="Height" value="175 cm" />

        <InfoCard title="Weight" value="70 kg" />

        <InfoCard title="Brand" value="Nike" />

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-2 gap-5 mt-6">

        <div className="bg-[#254F69] rounded-xl p-4">

          <p className="text-gray-300">
            Return Reduction
          </p>

          <h3 className="text-3xl font-bold text-[#42E0C8] mt-2">
            70%
          </h3>

        </div>

        <div className="bg-[#254F69] rounded-xl flex items-center justify-center">

          <span className="text-cyan-300">
            Graph
          </span>

        </div>

      </div>

    </div>
  );
};

export default DashboardCard;