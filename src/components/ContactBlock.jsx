import { PiTelegramLogo } from "react-icons/pi";
import pinkLogo from "../assets/img/logo/pink.webp";
import arrowUp from "../assets/img/arrowUp.png";
import { contactConfig } from "./mainConfig";
import blockSix from "../assets/img/background/blockSix.png";
import vkIcon from "../assets/img/vk.png";
import tgIcon from "../assets/img/tg.png";
export default function ContactBlock() {
  const { headerText, telegramButtonUrl, vkButtonUrl } = contactConfig;
  return (
    <div
      className="h-[881px] relative bg-center bg-cover bg-no-repeat bg-red flex flex-col md:flex-row justify-start items-end px-15"
      style={{ backgroundImage: `url(${blockSix})` }}
    >
      <div className="flex flex-col mb-10 justify-end content-end">
        <h1 className="text-[36px] font-bold mt-5 sm:mt-10">{headerText}</h1>
        <div className="flex mt-5 gap-2">
          <div
            onClick={() => window.open(telegramButtonUrl, "_blank")}
            className="flex p-3 mb-25 rounded-full"
          >
            <img src={tgIcon} className="h-17.5 w-17.5" />
          </div>

          <div
            onClick={() => window.open(vkButtonUrl, "_blank")}
            className="flex p-3 mb-25 rounded-full "
          >
            <img src={vkIcon} className="h-17.5 w-17.5" />
          </div>
        </div>

        <p className="text-[24px] font-semibold">Юридическая информация</p>
      </div>

      <div className="flex flex-col justify-between items-end md:mx-25 w-full md:w-auto">
        <button
          onClick={() =>
            (window.location.href = window.location.origin + "#start")
          }
          className="absolute left-[1775.22px] top-[451.22px] cursor-pointer"
        >
          <img src={arrowUp} alt="" />
        </button>
      </div>
      <div className="absolute top-[618.66px] left-[1277px]">
        <img src={pinkLogo} alt="Pink Logo" className="h-[202px] w-auto" />
      </div>
    </div>
  );
}
