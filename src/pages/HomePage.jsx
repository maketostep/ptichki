import ptica from "../assets/img/ptica.webp";
import ptica2 from "../assets/img/ptica2.webp";
export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-200 rounded-2xl p-5 m-5">
      <div className="flex">
        <img className="w-10 h-7 mt-7" src={ptica2} alt="птица 2" />
        <h1 className="text-5xl underline underline-offset-15 mb-10">
          Наш клуб
        </h1>
        <img className="w-5 h-5" src={ptica} alt="птица" />
      </div>

      <div className="flex"></div>
    </div>
  );
}
