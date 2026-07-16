interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

const Button = ({ text, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={`px-7 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer
      ${
        variant === "primary"
          ? "bg-[#7FA8FF] text-white hover:bg-[#6B95F8]"
          : "bg-white text-[#36536B] hover:bg-gray-100"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;