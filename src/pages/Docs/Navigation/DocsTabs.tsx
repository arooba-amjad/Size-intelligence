import { useState } from "react";

const tabs = [
  "Getting Started",
  "Authentication",
  "Rate Limit",
  "Predict Size",
  "Register Product",
  "Analytics",
  "Webhooks",
  "SDK's",
  "API Playground",
];

const DocsTabs = () => {
  const [activeTab, setActiveTab] = useState("Getting Started");

  // Split tabs into two rows to match the reference design
  const topTabs = tabs.slice(0, 5);
  const bottomTabs = tabs.slice(5);

  return (
    <section className="max-w-305 mx-auto px-6 py-6">
      
      <div className="max-w-250 border border-[#C7D3DE] rounded-4xl overflow-hidden bg-white mx-auto shadow-sm">
        
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8 py-5 border-b border-[#C7D3DE]">
          {topTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left text-[15px] font-bold transition-colors ${
                activeTab === tab
                  ? "text-[#36536B]"
                  : "text-[#6E7E8E] hover:text-[#36536B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8 py-5">
          {bottomTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left text-[15px] font-bold transition-colors ${
                activeTab === tab
                  ? "text-[#36536B]"
                  : "text-[#6E7E8E] hover:text-[#36536B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
};

export default DocsTabs;