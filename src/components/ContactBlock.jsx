import pinkLogo from "../assets/img/logo/pink.webp";
import arrowUp from "../assets/img/arrowUp.png";
import { contactConfig } from "./mainConfig";
import blockSix from "../assets/img/background/blockSix.png";
import vkIcon from "../assets/img/vk.png";
import tgIcon from "../assets/img/tg.png";
import { scrollToSection } from "../utils/navigation";
export default function ContactBlock() {
  const { headerText, telegramButtonUrl, vkButtonUrl } = contactConfig;
  return (
    <div
      className="h-[881px] relative bg-center bg-cover bg-no-repeat bg-red flex flex-col md:flex-row justify-between items-end md:px-15 px-5"
      style={{ backgroundImage: `url(${blockSix})` }}
    >
      <div className="flex w-full flex-col mb-10 justify-end content-end">
        <h1 className="w-full md:text-[36px] md:text-start text-center text-[26px] font-extrabold md:mt-5 mt-80 sm:mt-10">
          {headerText}
        </h1>
        <div className="flex md:justify-start justify-center md:mt-5 mt-10 mb-5 gap-2">
          <div
            onClick={() => window.open(telegramButtonUrl, "_blank")}
            className="flex p-3 md:mb-25 rounded-full"
          >
            <img src={tgIcon} className="h-17.5 w-17.5" />
          </div>

          <div
            onClick={() => window.open(vkButtonUrl, "_blank")}
            className="flex p-3 md:mb-25 rounded-full "
          >
            <img src={vkIcon} className="h-17.5 w-17.5" />
          </div>
        </div>

        <a className="md:text-[24px] md:text-start text-center text-lg font-semibold underline cursor-pointer">
          Юридическая информация
        </a>
      </div>

      <div className="flex flex-col content-center md:items-end items-center gap-15">
        <button
          onClick={() => scrollToSection("start")}
          className="cursor-pointer"
        >
          <img src={arrowUp} alt="arrowUp" />
        </button>
        <div className="flex justify-end mb-10">
          <img src={pinkLogo} alt="Pink Logo" className="2xl:w-[1500px]" />
        </div>
      </div>
    </div>
  );
}
