import { motion } from "motion/react";

const navItems = [
  "How it works",
  "Use cases",
  "Docs",
  "Pricing",
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/40"
    >
      <div className="max-w-[1220px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <motion.h2
          whileHover={{
            scale: 1.04,
          }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold text-[#36536B] cursor-pointer"
        >
          Size Intelligence API
        </motion.h2>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{
                y: -3,
                color: "#5D89B8",
              }}
              transition={{ duration: 0.2 }}
              className="relative text-[#36536B] font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5D89B8] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </motion.a>
          ))}

        </nav>

        {/* CTA */}

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          className="bg-[#36536B] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#2E4A60] transition-colors duration-300"
        >
          Get API Key
        </motion.button>

      </div>
    </motion.header>
  );
};

export default Navbar;