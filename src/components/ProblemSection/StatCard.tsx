interface StatCardProps {
  value: string;
  description: string;
}

const StatCard = ({ value, description }: StatCardProps) => {
  return (
    <div className="flex items-center gap-5">

      {/* Icon */}

      <div className="w-16 h-16 rounded-full bg-[#F2F8F7] flex items-center justify-center flex-shrink-0">

        <div className="w-8 h-8 rounded-full border border-[#36536B]"></div>

      </div>

      {/* Text */}

      <div>

        <h3 className="text-4xl font-bold text-[#36536B]">
          {value}
        </h3>

        <p className="mt-2 text-lg text-[#36536B]/80 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
};

export default StatCard;