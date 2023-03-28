const buttonStyles = {
  base: "bg-transparent text-white py-2 px-8 rounded-[45px] border-2 border-[#EED3A4] min-w-[160px] max-h-[44px] flex items-center",
  // base: "bg-transparent text-white py-2 px-8 rounded-[45px] border-2 border-[#fff] min-w-[160px] max-h-[44px] flex items-center",
  disabled: "bg-[#A2A2A2] opacity-60 cursor-not-allowed",
  // primary: "bg-green-500 hover:bg-green-700",
  //   secondary: "bg-red-500 hover:bg-red-700",
};

function Button({ children, onClick, btnStyle = "base", disabled = false }) {
  return (
    <button
      className={`${buttonStyles.base} ${buttonStyles[btnStyle]} ${
        disabled ? buttonStyles.disabled : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
