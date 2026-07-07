import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Hero = () => {
  return (
    <section className="bg-[#3E5F78] rounded-b-[40px]">

      <div className="max-w-[1220px] mx-auto px-6 lg:px-8 py-12">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <LeftSection />

          <RightSection />

        </div>

      </div>

    </section>
  );
};

export default Hero;