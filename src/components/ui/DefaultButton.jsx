export default function DefaultButton({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-white text-2xl md:text-3xl p-5 rounded-4xl cursor-pointer hover:shadow-2xl hover:scale-102 transition-all duration-300"
    >
      {text}
    </button>
  );
}
