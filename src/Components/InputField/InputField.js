const InputField = ({ inputType, title }) => {
  const className = {
    mainInput:
      "w-full capitalize text-base font-semibold p-2 border-2 border-[var(--gray-light-color)] placeholder:text-[var(--gray-light-color)]",
  };
  return <input type={inputType} placeholder={title} className={className.mainInput} />;
};

export default InputField;
