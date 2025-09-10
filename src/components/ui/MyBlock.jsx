export default function MyBlock({ text, children, textSize = "2xl" }) {
  return (
    <div className="flex flex-col text-center bg-red rounded-2xl m-5 p-5 md:p-10 gap-5">
      <h2 className={`text-${textSize} font-bold`}>{text}</h2>
      {children}
    </div>
  );
}
