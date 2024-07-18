export const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full duration-300
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}  hover:text-red-400 hover:border-red-400`
            : ` bg-coral-red text-white border-coral-red hover:bg-red-500`
        }
        
        ${fullWidth && `w-full`}
    `}>
      {label}

      {iconUrl && (
        <img src={iconUrl} alt="arrow-right-icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};
