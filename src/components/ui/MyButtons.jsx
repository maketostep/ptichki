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
      className={`bg-green md:px-15 md:py-10 px-10 py-8 text-white border-white md:border-[10px] border-4 rounded-full cursor-pointer hover:text-red hover:bg-yellow transition-all duration-300`}
    >
      <span className={`2xl:text-[40px] text-3xl font-semibold`}>{text}</span>
    </button>
  );
}

export function TelegramButton({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-green md:px-15 md:py-10 px-10 py-6 text-white border-white md:border-[10px] border-4 rounded-full cursor-pointer hover:text-red hover:bg-yellow transition-all duration-300`}
    >
      <span className={`2xl:text-[40px] text-4xl font-semibold`}>{text}</span>
    </button>
  );
}
