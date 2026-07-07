interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard = ({ title, value }: InfoCardProps) => {
  return (
    <div className="bg-[#254F69] rounded-xl p-3 border border-[#336A84]">

      <p className="text-xs text-gray-300">
        {title}
      </p>

      <h3 className="mt-1 font-semibold text-white">
        {value}
      </h3>

    </div>
  );
};

export default InfoCard;