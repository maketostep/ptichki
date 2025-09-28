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
      className="h-[881px] relative bg-center bg-cover bg-no-repeat bg-red flex flex-col md:flex-row justify-between items-end px-15"
      style={{ backgroundImage: `url(${blockSix})` }}
    >
      <div className="flex flex-col mb-10 justify-end content-end">
        <h1 className="md:text-[36px] text-2xl font-bold md:mt-5 mt-45 sm:mt-10">
          {headerText}
        </h1>
        <div className="flex md:mt-5 mt-15 gap-2">
          <div
            onClick={() => window.open(telegramButtonUrl, "_blank")}
            className="flex p-3 md:mb-25 rounded-full"
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

        <a className="md:text-[24px] text-lg font-semibold underline cursor-pointer">
          Юридическая информация
        </a>
      </div>

      <div className="flex flex-col content-center items-end gap-15">
        <button
          onClick={() =>
            (window.location.href = window.location.origin + "#start")
          }
          className="cursor-pointer"
        >
          <img src={arrowUp} alt="arrowUp" />
        </button>
        <div className="flex justify-end mb-10">
          <img src={pinkLogo} alt="Pink Logo" className="md:h-[202px] w-auto" />
        </div>
      </div>
    </div>
  );
}
