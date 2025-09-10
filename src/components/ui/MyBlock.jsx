export default function MyBlock({ text, children, textSize = "2xl" }) {
  return (
    <div className="flex flex-col text-center bg-red rounded-2xl m-5 p-5 md:p-10 gap-5 hover:scale-x-105 transition-all hover:shadow-2xl duration-300">
      <h2 className={`text-${textSize} font-bold select-none`}>{text}</h2>
      {children}
    </div>
  );
}
