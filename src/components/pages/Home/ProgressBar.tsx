interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="w-full h-2 rounded-full bg-[#335F77]">

      <div
        className="h-full rounded-full bg-[#42E0C8]"
        style={{ width: `${percentage}%` }}
      />

    </div>
  );
};

export default ProgressBar;