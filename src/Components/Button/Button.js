const Button = ({ style, color, children }) => {
  const className = {
    main: "font-semibold text-base px-3 py-1 bg-[var(--gray-light-color)] hover:bg-[#b1b1b1] border border-[#b1b1b1]",
    title:
      "font-semibold text-base px-3 py-1 hover:bg-[#b1b1b1] border border-transparent border-[#b1b1b1]",
    titleActive:
      "font-semibold text-base px-3 py-1 bg-[var(--gray-light-color)] hover:bg-[#b1b1b1] border border-[#b1b1b1]",
  };
  return (
    <button style={{ color: color }} className={className[style]}>
      {children}
    </button>
  );
};

export default Button;
