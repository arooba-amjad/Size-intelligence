import { FaCheck } from "react-icons/fa6";

interface PricingCardProps {
  title: string;
  price: string;
  suffix: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard = ({
  title,
  price,
  suffix,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl border border-[#AFC1D2] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        popular ? "shadow-lg" : ""
      }`}
    >
      {/* Popular Badge */}

      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#36536B] text-white text-xs font-semibold px-4 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}

      {/* Title */}

      <h3 className="text-3xl font-semibold text-[#36536B]">
        {title}
      </h3>

      {/* Price */}

      <div className="mt-4 flex items-end">

        <span className="text-5xl font-bold text-[#36536B]">

          {price === "Custom" ? price : `$${price}`}

        </span>

        {suffix && (
          <span className="ml-1 mb-1 text-2xl text-[#36536B]">
            {suffix}
          </span>
        )}

      </div>

      {/* Features */}

      <div className="mt-8 space-y-4">

        {features.map((feature) => (

          <div
            key={feature}
            className="flex items-start gap-3"
          >

            <FaCheck
              className="mt-1 text-[#36536B]"
            />

            <span className="text-lg text-[#36536B]">
              {feature}
            </span>

          </div>

        ))}

      </div>

      {/* Button */}

      <button
        className={`mt-10 w-full rounded-xl py-3 font-semibold transition-all duration-300 cursor-pointer
        ${
          popular
            ? "bg-[#6D9ED4] text-white hover:bg-[#5A8CC2]"
            : "border border-[#36536B] text-[#36536B] hover:bg-[#36536B] hover:text-white"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;