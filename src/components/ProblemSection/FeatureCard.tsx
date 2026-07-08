import type { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="relative bg-white rounded-3xl border border-gray-200 shadow-md p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">

      {/* Top Left */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-[6px] border-l-[6px] border-[#36536B] rounded-tl-3xl"></div>

      {/* Top Right */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-[6px] border-r-[6px] border-[#36536B] rounded-tr-3xl"></div>

      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[6px] border-l-[6px] border-[#36536B] rounded-bl-3xl"></div>

      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[6px] border-r-[6px] border-[#36536B] rounded-br-3xl"></div>

      {/* Icon */}

      <div className="w-20 h-20 mx-auto rounded-full bg-[#9DD2FF] flex items-center justify-center">

        <Icon
          size={36}
          className="text-[#36536B]"
        />

      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-center text-[#36536B]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 text-center text-[#36536B]/80 leading-8 text-lg">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;