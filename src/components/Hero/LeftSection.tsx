import Button from "./Button";

const LeftSection = () => {
  return (
    <div className="w-full lg:w-[45%] text-white">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 bg-white text-[#36536B] rounded-full px-5 py-2 text-sm font-medium">
        ✨ Developer-first sizing API
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-[42px] lg:text-[50px] font-bold leading-[1.05]">

        Size Intelligence API

        <br />

        for

        <span className="text-[#8CC6FF]">
          {" "}Ecommerce
        </span>

      </h1>

      {/* Description */}

      <p className="mt-6 text-[18px] font-bold  leading-8 max-w-[520px]">

        Reduce returns. Improve fit. One API call to recommend
        the perfect clothing size using ML, size charts,
        and brand intelligence.

      </p>

      {/* Platforms */}

      <div className="flex flex-wrap gap-3 mt-8 text-xl">

        <span>Shopify  |</span>
       
        <span>Woo-Commerce  |</span>

        <span>Custom Ecommerce</span>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-4 flex-wrap">

        <Button text="Try Demo →" />

        <Button
          text="View Documentation"
          variant="secondary"
        />

      </div>

    </div>
  );
};

export default LeftSection;