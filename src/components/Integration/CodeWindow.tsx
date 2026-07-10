import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const CodeWindow = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");
  const tabs = ["JavaScript", "Python", "cURL", "PHP"];

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden">
      
      {/* Tabs Header */}
      <div className="flex items-center justify-between px-6 border-b border-gray-100">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-semibold transition-colors relative ${
                activeTab === tab
                  ? "text-[#36536B]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#36536B]"></div>
              )}
            </button>
          ))}
        </div>
        <button className="text-gray-400 hover:text-[#36536B] transition-colors p-2">
          <IoCopyOutline size={20} />
        </button>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto bg-[#FFFFFF]">
        <table className="text-[14px] font-mono whitespace-pre text-[#36536B]">
          <tbody>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">1</td>
              <td>
                <span className="text-[#005CC5]">import</span> {"{ "} SizeAI {" }"} <span className="text-[#005CC5]">from</span> <span className="text-[#032F62]">'size-ai-sdk'</span>;
              </td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">2</td>
              <td>
                <span className="text-[#005CC5]">const</span> client = <span className="text-[#005CC5]">new</span> SizeAI({"{ "} apiKey: process.env.SIZE_AI_API_KEY {" }"});
              </td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right py-2">3</td>
              <td></td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">4</td>
              <td>
                <span className="text-[#005CC5]">const</span> {"{ "} recommended_size, confidence {" }"} = <span className="text-[#005CC5]">await</span> client.predictSize({"{ "})
              </td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">5</td>
              <td className="pl-4">
                user: {"{ "} height_cm: <span className="text-[#005CC5]">175</span>, weight_kg: <span className="text-[#005CC5]">70</span>, chest_cm: <span className="text-[#005CC5]">94</span>, waist_cm: <span className="text-[#005CC5]">80</span>,
              </td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">6</td>
              <td className="pl-12">
                hips_cm: <span className="text-[#005CC5]">98</span>, gender: <span className="text-[#032F62]">'male'</span> {" }"},
              </td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">7</td>
              <td className="pl-4">
                productId: <span className="text-[#032F62]">'prod_123'</span>
              </td>
            </tr>
            <tr>
              <td className="pr-6 text-gray-300 select-none text-right">8</td>
              <td>
                {"});"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CodeWindow;