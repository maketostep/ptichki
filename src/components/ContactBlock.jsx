import { PiTelegramLogo } from "react-icons/pi";
import { FaLongArrowAltUp } from "react-icons/fa";
import whiteLogo from "../assets/img/logo/white.webp";

export default function ContactBlock() {
  return (
    <div className="h-full bg-red flex justify-between">
      <div className="flex flex-col md:mx-25">
        <h1 className="mt-15 text-5xl font-extrabold text-white">соц сети</h1>
        <div className="flex mt-20 gap-5">
          <div className="flex p-5 rounded-full bg-yellow">
            <PiTelegramLogo className="h-15 w-15" />
          </div>
          <div className="flex p-5 rounded-full bg-yellow">
            <PiTelegramLogo className="h-15 w-15" />
          </div>
        </div>

        <div className="mt-25 border border-black rounded-3xl mb-10">
          <h1 className="p-15 text-5xl font-extrabold text-white">
            юридический блок
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end md:mx-25 mb-10">
        <button className="mt-10 flex text-5xl text-white cursor-pointer">
          Наверх <FaLongArrowAltUp />
        </button>
        <div className="flex mt-10">
          <img src={whiteLogo} alt="White Logo" className="h-75 w-auto" />
        </div>
      </div>
    </div>
  );
}
