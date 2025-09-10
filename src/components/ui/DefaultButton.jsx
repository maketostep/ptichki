export default function DefaultButton({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-white text-2xl md:text-3xl p-5 rounded-4xl cursor-pointer"
    >
      {text}
    </button>
  );
}
