import { FaPhone, FaGlobe, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#86A8C4] pt-16 pb-18 px-6">
      
      {/* White Card Container */}
      <div className="relative z-10 max-w-[1100px] mx-auto bg-white rounded-[40px] shadow-lg pt-16 pb-8 px-10 md:px-16">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Left Column: Brand & Description */}
          <div className="md:col-span-6">
            <h3 className="text-2xl font-bold text-[#36536B] mb-4">
              Size Intelligence API
            </h3>
            <p className="text-[#6B7C8E] text-[15px] leading-relaxed max-w-md mb-8">
              Reduce returns. Improve fit. One API call to recommend the perfect clothing size using ML, size charts, and brand intelligence.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-[#36536B] hover:text-[#5c84a3] transition-colors">
                <FaPhone size={22} />
              </a>
              <a href="#" className="text-[#36536B] hover:text-[#5c84a3] transition-colors">
                <FaGlobe size={22} />
              </a>
              <a href="#" className="text-[#36536B] hover:text-[#5c84a3] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#36536B] hover:text-[#5c84a3] transition-colors">
                <FaEnvelope size={24} />
              </a>
              <a href="#" className="text-[#36536B] hover:text-[#5c84a3] transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Middle Column: Product Links */}
          <div className="md:col-span-3 flex flex-col md:items-center">
            <div className="w-fit">
              <h4 className="text-lg font-bold text-[#36536B] mb-6">
                Product
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-[#36536B]">
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-[#6B7C8E] transition-colors">API Key</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Company Links */}
          <div className="md:col-span-3 flex flex-col md:items-center">
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
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-16">
          <hr className="border-gray-200 mb-6 max-w-[80%] mx-auto" />
          <p className="text-center text-[15px] font-medium text-[#36536B]">
            © 2026 Size Intelligence API
          </p>
        </div>

      </div>

      {/* Bottom Dark Strip */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[#36536B]"></div>

    </footer>
  );
};

export default Footer;