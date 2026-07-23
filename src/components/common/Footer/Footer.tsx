import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaPhone, FaGlobe, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#86A8C4] pt-16 pb-18 px-6">
      
      {/* White Card Container */}
      <motion.div
        className="relative z-10 max-w-[1100px] mx-auto bg-white rounded-[40px] shadow-lg pt-16 pb-8 px-10 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Left Column: Brand & Description */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-[#36536B] mb-4">
              Size Intelligence API
            </h3>
            <p className="text-[#6B7C8E] text-[15px] leading-relaxed max-w-md mb-8">
              Reduce returns. Improve fit. One API call to recommend the perfect clothing size using ML, size charts, and brand intelligence.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              {[
                { Icon: FaPhone, size: 22 },
                { Icon: FaGlobe, size: 22 },
                { Icon: FaInstagram, size: 24 },
                { Icon: FaEnvelope, size: 24 },
                { Icon: FaLinkedin, size: 24 },
              ].map(({ Icon, size }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-[#36536B]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.06, ease: "easeOut" }}
                  whileHover={{ scale: 1.2, color: "#5c84a3" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={size} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Middle Column: Product Links */}
          <motion.div
            className="md:col-span-3 flex flex-col md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-fit">
              <h4 className="text-lg font-bold text-[#36536B] mb-6">
                Product
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-[#36536B]">
                <li><Link to="/" className="hover:text-[#6B7C8E] transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Demo</a></li>
                <li><Link to="/docs" className="hover:text-[#6B7C8E] transition-colors">Docs</Link></li>
                <li><Link to="/get-api-key" className="hover:text-[#6B7C8E] transition-colors">API Key</Link></li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Company Links */}
          <motion.div
            className="md:col-span-3 flex flex-col md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-fit">
              <h4 className="text-lg font-bold text-[#36536B] mb-6">
                Company
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-[#36536B]">
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Divider & Copyright */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <hr className="border-gray-200 mb-6 max-w-[80%] mx-auto" />
          <p className="text-center text-[15px] font-medium text-[#36536B]">
            © 2026 Size Intelligence API
          </p>
        </motion.div>

      </motion.div>

      {/* Bottom Dark Strip */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[#36536B]"></div>

    </footer>
  );
};

export default Footer;