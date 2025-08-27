import ptica from "../../assets/img/ptica.webp";
import ptica2 from "../../assets/img/ptica2.webp";

export default function Block({ headerText, children, bottom }) {
  return (
    <div className="flex-1 flex-grow">
      <div className="flex justify-center w-auto h-auto p-10 bg-amber-200 rounded-2xl hover:scale-102 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center justify-center content-center">
          <div className="flex justify-center">
            <img className="w-auto h-7" src={ptica2} alt="Птица" />
            <h1 className="text-center text-4xl md:text-5xl underline underline-offset-15 mb-10">
              {headerText}
            </h1>
            <img className="w-5 h-5" src={ptica} alt="Птица" />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>

      {bottom && <div className="flex">{bottom}</div>}
    </div>
  );
}
