import { PiTelegramLogo } from "react-icons/pi";
import { FaLongArrowAltUp } from "react-icons/fa";
import whiteLogo from "../assets/img/logo/white.webp";
import { contactConfig } from "./mainConfig";

export default function ContactBlock() {
  const { headerText, blockText, firstButtonUrl } = contactConfig;
  return (
    <div className="h-full bg-red flex flex-col md:flex-row justify-center items-center md:justify-between px-5 md:px-25 py-10">
      <div className="flex flex-col mb-10 md:mb-0 md:mx-25 w-full md:w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-5 sm:mt-10">
          {headerText}
        </h1>
        <div className="flex mt-5 sm:mt-10 gap-3 sm:gap-5">
          <div
            onClick={() => window.open(firstButtonUrl, "_blank")}
            className="flex p-3 sm:p-5 rounded-full bg-yellow"
          >
            <PiTelegramLogo className="h-8 w-8 sm:h-15 sm:w-15" />
          </div>
        </div>

        <div className="mt-5 sm:mt-10 border border-black rounded-3xl mb-5 sm:mb-10 p-5 sm:p-15">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {blockText}
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end md:mx-25 w-full md:w-auto">
        <button
          onClick={() =>
            (window.location.href = window.location.origin + "#start")
          }
          className="mt-5 sm:mt-10 flex text-2xl sm:text-4xl md:text-5xl text-white cursor-pointer"
        >
          Наверх <FaLongArrowAltUp className="ml-2" />
        </button>
        <div className="flex mt-5 sm:mt-10">
          <img
            src={whiteLogo}
            alt="White Logo"
            className="h-16 sm:h-50 md:h-75 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
