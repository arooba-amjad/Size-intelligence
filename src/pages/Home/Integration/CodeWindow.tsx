import { useState } from "react";
import { motion } from "motion/react";
import { IoCopyOutline } from "react-icons/io5";

const CodeWindow = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");

  const tabs = ["JavaScript", "Python", "cURL", "PHP"];

  const codeRows = [
    {
      no: "1",
      code: (
        <>
          <span className="text-[#005CC5]">import</span> {"{ "} SizeAI {" }"}{" "}
          <span className="text-[#005CC5]">from</span>{" "}
          <span className="text-[#032F62]">'size-ai-sdk'</span>;
        </>
      ),
    },
    {
      no: "2",
      code: (
        <>
          <span className="text-[#005CC5]">const</span> client ={" "}
          <span className="text-[#005CC5]">new</span> SizeAI(
          {"{ "} apiKey: process.env.SIZE_AI_API_KEY {" }"});
        </>
      ),
    },
    {
      no: "3",
      code: "",
    },
    {
      no: "4",
      code: (
        <>
          <span className="text-[#005CC5]">const</span>{" "}
          {"{ "} recommended_size, confidence {" }"} =
          <span className="text-[#005CC5]"> await</span>{" "}
          client.predictSize({"{"})
        </>
      ),
    },
    {
      no: "5",
      code: (
        <>
          user: {"{ "} height_cm:
          <span className="text-[#005CC5]">175</span>, weight_kg:
          <span className="text-[#005CC5]">70</span>, chest_cm:
          <span className="text-[#005CC5]">94</span>, waist_cm:
          <span className="text-[#005CC5]">80</span>,
        </>
      ),
      indent: "pl-4",
    },
    {
      no: "6",
      code: (
        <>
          hips_cm:
          <span className="text-[#005CC5]">98</span>, gender:
          <span className="text-[#032F62]">'male'</span> {" }"},
        </>
      ),
      indent: "pl-12",
    },
    {
      no: "7",
      code: (
        <>
          productId:
          <span className="text-[#032F62]">'prod_123'</span>
        </>
      ),
      indent: "pl-4",
    },
    {
      no: "8",
      code: "});",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px rgba(0,0,0,.12)",
      }}
      className="w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden"
    >
      {/* Header */}

      <div className="flex items-center justify-between px-6 border-b border-gray-100">

        <div className="flex space-x-6">

          {tabs.map((tab) => (

            <motion.button
              key={tab}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-semibold relative transition-colors ${
                activeTab === tab
                  ? "text-[#36536B]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#36536B]"
                />
              )}

            </motion.button>

          ))}

        </div>

        <motion.button
          whileHover={{
            rotate: 15,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="text-gray-400 hover:text-[#36536B] p-2"
        >
          <IoCopyOutline size={20} />
        </motion.button>

      </div>

      {/* Code */}

      <div className="p-6 overflow-x-auto bg-white">

        <table className="text-[14px] font-mono whitespace-pre text-[#36536B]">

          <tbody>

            {codeRows.map((row, index) => (

              <motion.tr
                key={row.no}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.35,
                }}
              >
                <td className="pr-6 text-gray-300 select-none text-right">
                  {row.no}
                </td>

                <td className={row.indent ?? ""}>
                  {row.code}
                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </motion.div>
  );
};

export default CodeWindow;