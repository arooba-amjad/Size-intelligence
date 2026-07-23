import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Docs",
    path: "/docs",
  },
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
      <div className="max-w-305 mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <motion.div
          whileHover={{
            scale: 1.04,
          }}
          transition={{ duration: 0.2 }}
        >
          <NavLink
            to="/"
            className="text-2xl font-bold text-[#36536B]"
          >
            Size Intelligence API
          </NavLink>
        </motion.div>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (

            <motion.div
              key={item.path}
              whileHover={{
                y: -3,
              }}
              transition={{ duration: 0.2 }}
            >

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:bg-[#5D89B8]
                  after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-[#5D89B8] after:w-full"
                      : "text-[#36536B] after:w-0 hover:text-[#5D89B8] hover:after:w-full"
                  }`
                }
              >
                {item.label}
              </NavLink>

            </motion.div>

          ))}

        </nav>

        {/* CTA */}

        <NavLink to="/get-api-key">

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

        </NavLink>

      </div>
    </motion.header>
  );
};

export default Navbar;