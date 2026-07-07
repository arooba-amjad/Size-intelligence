const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <h2 className="text-2xl font-bold text-[#36536B]">
          Size Intelligence API
        </h2>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10 text-[#36536B] font-medium">

          <a href="#">How it works</a>

          <a href="#">Use cases</a>

          <a href="#">Docs</a>

          <a href="#">Pricing</a>

        </nav>

        {/* Button */}

        <button
          className="bg-[#36536B] text-white px-6 py-3 rounded-xl hover:bg-[#2E4A60] transition"
        >
          Get API Key
        </button>

      </div>
    </header>
  );
};

export default Navbar;