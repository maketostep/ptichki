import ptica from "../../assets/img/ptica.webp";
import ptica2 from "../../assets/img/ptica2.webp";

export default function Block({ headerText, children }) {
  return (
    <div className="flex justify-center w-full h-full p-5 bg-amber-200 rounded-2xl hover:scale-102 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="flex">
          <img className="w-10 h-7 mt-7" src={ptica2} alt="Птица" />
          <h1 className="text-5xl underline underline-offset-15 mb-10">
            {headerText}
          </h1>
          <img className="w-5 h-5" src={ptica} alt="Птица" />
        </div>
        {children}
      </div>
    </div>
  );
}
