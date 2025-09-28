export function DefaultButton({
  text,
  handleClick,
  size = "2xl",
  color = "red",
}) {
  return (
    <button
      onClick={handleClick}
      className={`bg-white w-[158px] h-[80px] text-red border-red border-[5px] text-${size} rounded-full cursor-pointer hover:bg-${color} hover:text-white transition-all duration-300`}
    >
      <span className="text-[24px] font-semibold">{text}</span>
    </button>
  );
}

export function SecondButton({ text, handleClick, size = "2xl" }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-red w-[361px] h-[80px] text-white text-${size} rounded-full cursor-pointer hover:bg-green transition-all duration-300`}
    >
      <span className="text-[24px] font-semibold">{text}</span>
    </button>
  );
}

export function GreenButton({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-green w-[385px] h-[133px] text-white border-white border-[10px] rounded-full cursor-pointer hover:text-red hover:bg-yellow transition-all duration-300`}
    >
      <span className={`text-[40px] font-semibold`}>{text}</span>
    </button>
  );
}

export function TelegramButton({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-green w-[366px] h-[133px] text-white border-white border-[10px] rounded-full cursor-pointer hover:text-red hover:bg-yellow transition-all duration-300`}
    >
      <span className={`text-[40px] font-semibold`}>{text}</span>
    </button>
  );
}
