import { motion } from "motion/react";
import DashboardCard from "../../ui/DashboardCard";

const RightSection = () => {
  return (
    <motion.div
      className="w-full lg:w-[55%] flex justify-end"
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      }}
    >
      <DashboardCard />
    </motion.div>
  );
};

export default RightSection;