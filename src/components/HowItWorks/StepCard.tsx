import type { IconType } from "react-icons";

interface StepCardProps {
  number: number;
  title: string;
  icon: IconType;
  isLast?: boolean;
}

const StepCard = ({
  number,
  title,
  icon: Icon,
  isLast = false,
}: StepCardProps) => {
  return (
    <div className="relative flex items-start gap-8 pb-10">

      {/* Timeline */}

      <div className="relative w-20 flex justify-center">

        {/* Number */}

        <div className="absolute -top-1 left-0 w-9 h-9 rounded-full bg-[#36536B] text-white text-sm font-semibold flex items-center justify-center z-20">
          {number}
        </div>

        {/* Horizontal Line */}

        {!isLast && (
          <>
            <div className="absolute top-4 left-9 w-16 h-[3px] bg-[#36536B]" />

            {/* Vertical Line */}

            <div className="absolute top-4 left-[100px] w-[3px] h-28 bg-[#36536B]" />
          </>
        )}
      </div>

      {/* Content */}

      <div>

        {/* Icon */}

        <div className="w-24 h-24 rounded-full bg-[#F6FBFC] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105">

          <Icon
            size={36}
            className="text-[#36536B]"
          />

        </div>

        {/* Title */}

        <h3 className="mt-1 text-[28px] font-bold text-[#36536B]">
          {title}
        </h3>

      </div>

    </div>
  );
};

export default StepCard;