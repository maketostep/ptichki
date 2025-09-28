export default function DefaultButton({
  text,
  handleClick,
  size = "2xl",
  color = "red",
}) {
  return (
    <button
      onClick={handleClick}
      className={`bg-white text-${color} border-${color} border-2 text-${size} px-6 py-4 rounded-full cursor-pointer hover:bg-${color} hover:text-white transition-all duration-300`}
    >
      {text}
    </button>
  );
}

export function SecondButton({ text, handleClick, size = "2xl" }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-red text-white text-${size} px-6 py-4 rounded-full cursor-pointer hover:bg-green transition-all duration-300`}
    >
      {text}
    </button>
  );
}
